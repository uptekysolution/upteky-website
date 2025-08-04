// app/AudioPlayerSingle.tsx
"use client";
import { useEffect, useRef } from "react";
import { audioQueueStore } from "./audioQueueStore";

interface Props {
  onEnded: () => void;
}

export default function AudioPlayerSingle({ onEnded }: Props) {
  const url = audioQueueStore((s) => s.currentUrl);
  const setUrl = audioQueueStore((s) => s.setUrl);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!url) return;
    const audio = new Audio(url);
    audioRef.current = audio;

    // only play once it's ready
    const onCanPlay = () => {
      audio.play().catch(console.error);
    };
    audio.addEventListener("canplaythrough", onCanPlay);

    const handler = () => {
      setUrl(null);
      onEnded(); // use the parent’s startRecording
    };

    audio.addEventListener("ended", handler);
    audio.play().catch(console.error);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handler);
      audio.removeEventListener("canplaythrough", handler);
      URL.revokeObjectURL(url);
      audioRef.current = null;
    };
  }, [url, setUrl, onEnded]);

  return null;
}
