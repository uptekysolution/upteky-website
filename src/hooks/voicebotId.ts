// src/utils/voicebotId.ts
/**
 * Fetches the current voicebot ID from localStorage,
 * generating a new one if absent or >5 minutes old.
 */
const KEY = "__VOICEBOT_ID";
export function getVoicebotId(): string {
  let id = typeof window !== "undefined" && localStorage.getItem(KEY);

  if (!id) {
    id = new Date().toISOString();
    localStorage.setItem(KEY, id);
  }
  return id;
}

export function clearVoicebotId(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(KEY);
  }
}
