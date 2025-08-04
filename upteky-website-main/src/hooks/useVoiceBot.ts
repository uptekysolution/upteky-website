// app/useVoiceBot.ts
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import MicRecorder from "./MicRecorder";
import { audioQueueStore } from "./audioQueueStore";
import { getVoicebotId } from "./voicebotId";

export function useVoiceBot() {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState<
    "Idle" | "listening" | "thinking" | "speaking"
  >("Idle");

  const recorderRef = useRef(new MicRecorder());
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const silenceTimer = useRef<number | null>(null);
  const interruptTimer = useRef<number | null>(null);

  // —— startRecording ——
  const startRecording = useCallback(async () => {
    await recorderRef.current.start();
    setStatus("listening");
    setIsRecording(true);
  }, []);

  // —— sendRecording ——
  const sendRecording = useCallback(async () => {
    if (!isRecording) return;
    setStatus("thinking");

    // await new Promise((r) => setTimeout(r, 0));

    const blob = await recorderRef.current.stop();
    setIsRecording(false);

    analyserRef.current?.disconnect();
    clearTimeout(silenceTimer.current!);
    clearTimeout(interruptTimer.current!);

    const form = new FormData();
    form.append("audio", blob, "voice.webm");
    form.append("voicebotID", getVoicebotId());

    // const res = await fetch("http://localhost:4003/voice-chat", {
    const res = await fetch("https://voicebot.upteky.com/voice-chat", {
      method: "POST",
      credentials: "include",
      body: form,
    });

    const ct = (res.headers.get("Content-Type") || "").toLowerCase();
    console.log("[useVoiceBot] server content-type:", ct);

    if (!res.ok || !ct.includes("audio/")) {
      console.error("Voice‑chat error", await res.text());
      // setStatus("Idle");
      return;
    }

    // ✅ Audio reply
    const audioBlob = await res.blob();
    const url = URL.createObjectURL(audioBlob);
    setStatus("speaking");
    audioQueueStore.getState().setUrl(url);
  }, [isRecording]);

  // —— Silence‑based auto‑stop during listening ——
  useEffect(() => {
    if (status !== "listening" || !recorderRef.current.stream) return;

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
      // console.log(`Checking silence: ${rms}`)

      if (rms < 25) {
        if (!silenceTimer.current) {
          // console.log("Silence detected:")
          silenceTimer.current = window.setTimeout(sendRecording, 2000);
        }
      } else {
        clearTimeout(silenceTimer.current!);
        silenceTimer.current = null;
      }
      if (status === "listening") requestAnimationFrame(checkSilence);
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
    if (status !== "speaking") {
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

      if (rms > 33) {
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
    if (!isRecording) return; // haven’t started ⇒ nothing to stop
    try {
      recorderRef.current.stop(); // this will throw if never started
    } catch {
      console.warn("[useVoiceBot] stop called before start");
    }
    setIsRecording(false);
    setStatus("Idle");
    analyserRef.current?.disconnect();
    clearTimeout(silenceTimer.current!);
    clearTimeout(interruptTimer.current!);
  }, [isRecording]);

  return { isRecording, status, startRecording, stopRecording };
}
