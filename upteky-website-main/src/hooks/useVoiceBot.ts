// app/useVoiceBot.ts
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import MicRecorder from "./MicRecorder";
import { audioQueueStore } from "./audioQueueStore";
import { getVoicebotId } from "./voicebotId";
import { prefetchGreeting, playGreeting } from "./greetingCache";

export function useVoiceBot() {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState<
    "Idle" | "Listening" | "Thinking" | "Speaking"
  >("Idle");

  const recorderRef = useRef(new MicRecorder());
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const silenceTimer = useRef<number | null>(null);
  const interruptTimer = useRef<number | null>(null);

  // Prefetch greeting once per session
  useEffect(() => {
    // Pre-warm mic and TTS greeting
    recorderRef.current.warmUp().catch(() => {});
    prefetchGreeting().catch(() => {
      // swallow errors to avoid noisy console; fallbacks will handle later
    });
  }, []);

  // —— startRecording ——
  const startRecording = useCallback(async () => {
    setStatus("Listening");
    setIsRecording(true);
    await recorderRef.current.start();
  }, []);

  // —— startConversation (first click) ——
  const startConversation = useCallback(async () => {
    if (status !== "Idle") return; // prevent double trigger
    setStatus("Speaking");
    try {
      await playGreeting({
        onEnded: () => {
          startRecording();
        },
      });
    } catch {
      // If all fallbacks fail, still proceed to Listening to keep UX unblocked
      startRecording();
    }
  }, [status, startRecording]);

  // —— sendRecording ——
  const sendRecording = useCallback(async () => {
    if (!isRecording) return;
    setStatus("Thinking");

    const blob = await recorderRef.current.stop();
    setIsRecording(false);

    analyserRef.current?.disconnect();
    clearTimeout(silenceTimer.current!);
    clearTimeout(interruptTimer.current!);

    const form = new FormData();
    form.append("audio", blob, "voice.webm");
    form.append("voicebotID", getVoicebotId());

    try {
      const res = await fetch("https://voicebot.upteky.com/voice-chat", {
        // const res = await fetch("http://localhost:4003/voice-chat", {
        method: "POST",
        credentials: "include",
        body: form,
      });

      const contentTypeHeader = (res.headers.get("Content-Type") || "").toLowerCase();
      const contentLengthHeader = res.headers.get("Content-Length");
      console.log("[useVoiceBot] server content-type:", contentTypeHeader);

      // Handle no-content responses (e.g., 204) or empty body gracefully by resuming listening
      if (res.status === 204 || (!contentTypeHeader && res.ok)) {
        setStatus("Listening");
        setIsRecording(true);
        await recorderRef.current.start();
        return;
      }

      if (contentTypeHeader.includes("application/json")) {
        const json = await res.json().catch(() => ({} as any));
        if ((json as any).isLeadPrompt) {
          setStatus("Listening");
          setIsRecording(true);
          await recorderRef.current.start();
          return;
        }
        const errorMessage = (json as any).error || (json as any).message;
        if (errorMessage) {
          console.error("Voice‑chat error", errorMessage);
          setStatus("Idle");
          return;
        }
        // Unknown JSON payload: fallback to resume listening
        setStatus("Listening");
        setIsRecording(true);
        await recorderRef.current.start();
        return;
      }

      if (!res.ok || !contentTypeHeader.includes("audio/")) {
        // Gracefully handle server errors (5xx) by resuming listening
        if (res.status >= 500) {
          console.warn("Voice‑chat server error", `${res.status} ${res.statusText}`);
          setStatus("Listening");
          setIsRecording(true);
          await recorderRef.current.start();
          return;
        }

        let message = "";
        try {
          message = await res.text();
        } catch {}
        if (!message || message.trim().length === 0) {
          message = `${res.status} ${res.statusText}`;
        }
        console.error("Voice‑chat error", message);
        setStatus("Idle");
        return;
      }

      // ✅ Audio reply
      const audioBlob = await res.blob();
      const url = URL.createObjectURL(audioBlob);
      setStatus("Speaking");
      audioQueueStore.getState().setUrl(url);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("Voice‑chat error", message);
      setStatus("Idle");
    }
  }, [isRecording]);

  // —— Silence‑based auto‑stop during listening ——
  useEffect(() => {
    if (
      (status !== "Listening" && status !== "Thinking") ||
      !recorderRef.current.stream
    )
      return;

    const ctx = new AudioContext();
    const source = ctx.createMediaStreamSource(recorderRef.current.stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    analyserRef.current = analyser;
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

    const checkSilence = () => {
      analyser.getByteTimeDomainData(dataArrayRef.current!);
      let sum = 0;
      for (const v of dataArrayRef.current!) sum += (v - 128) ** 2;
      const rms = Math.sqrt(sum / dataArrayRef.current!.length);

      if (rms < 25) {
        if (!silenceTimer.current) {
          silenceTimer.current = window.setTimeout(sendRecording, 2000);
        }
      } else {
        clearTimeout(silenceTimer.current!);
        silenceTimer.current = null;
      }
      if (status === "Listening") requestAnimationFrame(checkSilence);
    };
    checkSilence();

    return () => {
      analyser.disconnect();
      ctx.close();
      clearTimeout(silenceTimer.current!);
    };
  }, [status, sendRecording]);

  // —— Loudness‑based interrupt during speaking ——
  useEffect(() => {
    // only run this detector when we’re actually playing back
    if (status !== "Speaking") {
      return;
    }
    console.debug("🔊 Interrupt detector active");

    const stream = recorderRef.current.stream;
    if (!stream) {
      console.warn("No mic stream available for interrupt detection");
      return;
    }

    const ctx = new AudioContext();
    const source = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    analyserRef.current = analyser;
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

    const checkInterrupt = () => {
      analyser.getByteTimeDomainData(dataArrayRef.current!);
      let sum = 0;
      for (const v of dataArrayRef.current!) sum += (v - 128) ** 2;
      const rms = Math.sqrt(sum / dataArrayRef.current!.length);

      if (rms > 26) {
        console.debug("🎤 Interrupt detected (RMS)", rms);
        // fire once
        audioQueueStore.getState().setUrl(null);
        startRecording();
        return; // stop polling
      }
      // continue polling while speaking
      requestAnimationFrame(checkInterrupt);
    };
    checkInterrupt();

    return () => {
      console.debug("🔇 Interrupt detector teardown");
      analyser.disconnect();
      ctx.close();
    };
  }, [status, startRecording]);

  // —— manual stop ——
  const stopRecording = useCallback(() => {
    if (!isRecording) return;
    recorderRef.current.stop();
    setIsRecording(false);
    setStatus("Idle");
    analyserRef.current?.disconnect();
    clearTimeout(silenceTimer.current!);
    clearTimeout(interruptTimer.current!);
  }, [isRecording]);

  // When bot reply audio finishes, resume listening for the user
  const onBotSpeechEnded = useCallback(() => {
    startRecording();
  }, [startRecording]);

  return { isRecording, status, startRecording, stopRecording, startConversation, onBotSpeechEnded };
}
