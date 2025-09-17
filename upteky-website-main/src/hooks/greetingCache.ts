// app/greetingCache.ts
"use client";

// Greeting text and desired voice
const GREETING_TEXT = "Hi there, I’m Parth. May I have your full name, please?";
const DESIRED_VOICE_NAME = "echo"; // OpenAI ChatGPT TTS voice name

let cachedGreetingBlob: Blob | null = null;
let cachedGreetingUrl: string | null = null;
let prefetchInFlight: Promise<void> | null = null;

function revokeCachedUrl() {
  if (cachedGreetingUrl) {
    URL.revokeObjectURL(cachedGreetingUrl);
    cachedGreetingUrl = null;
  }
}

async function fetchTtsGreeting(): Promise<Blob> {
  // Replace with your proxy/server endpoint that returns audio/mpeg or audio/wav
  // Must set CORS headers server-side. Expected to accept text and voice params or have greeting pre-cached.
  const endpoint = (process.env.NEXT_PUBLIC_GREETING_TTS_URL || "https://voicebot.upteky.com/greeting-tts");
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: GREETING_TEXT, voice: DESIRED_VOICE_NAME }),
  });
  if (!res.ok) {
    throw new Error(`Greeting TTS failed: ${res.status}`);
  }
  const ct = (res.headers.get("Content-Type") || "").toLowerCase();
  if (!ct.includes("audio/")) {
    throw new Error(`Greeting TTS content-type not audio: ${ct}`);
  }
  return await res.blob();
}

// Web Speech API fallback is intentionally removed to enforce server TTS voice consistency

async function playFromUrl(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url);
    audio.addEventListener("ended", () => resolve());
    audio.addEventListener("error", () => reject(new Error("Audio element error")));
    // Ensure quick start
    const startTimer = window.setTimeout(() => {
      // If it hasn't started within 300ms, we still proceed; the play promise below will handle errors
    }, 300);
    audio.play().then(() => {
      window.clearTimeout(startTimer);
    }).catch(reject);
  });
}

export async function prefetchGreeting(): Promise<void> {
  if (cachedGreetingBlob) return;
  if (prefetchInFlight) return prefetchInFlight;
  prefetchInFlight = (async () => {
    try {
      const blob = await fetchTtsGreeting();
      cachedGreetingBlob = blob;
      revokeCachedUrl();
      cachedGreetingUrl = URL.createObjectURL(blob);
    } catch (err) {
      // Do not throw; fallbacks will be used when playing
      // Optionally, attempt to pre-warm local MP3 by fetching HEAD
      try {
        await fetch("/greeting.wav", { method: "HEAD" });
      } catch {}
    } finally {
      prefetchInFlight = null;
    }
  })();
  return prefetchInFlight;
}

export async function playGreeting(opts: { onEnded?: () => void } = {}): Promise<void> {
  // 1) Prefer cached TTS for instant playback
  if (cachedGreetingBlob || cachedGreetingUrl) {
    try {
      if (!cachedGreetingUrl && cachedGreetingBlob) {
        cachedGreetingUrl = URL.createObjectURL(cachedGreetingBlob);
      }
      await playFromUrl(cachedGreetingUrl!);
      opts.onEnded?.();
      return;
    } catch {}
  }

  // 2) Play local bundled WAV immediately to avoid any network delay blocking user gesture
  try {
    await playFromUrl("/greeting.wav");
    opts.onEnded?.();
  } catch {
    // 3) If local missing, we silently continue and still call onEnded after attempting server prefetch
  }

  // Kick off a background prefetch to have server TTS ready for the next time
  (async () => {
    try {
      const blob = await fetchTtsGreeting();
      cachedGreetingBlob = blob;
      revokeCachedUrl();
      cachedGreetingUrl = URL.createObjectURL(blob);
    } catch {}
  })();
}

export const greetingText = GREETING_TEXT;

