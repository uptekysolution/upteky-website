// app/audioQueueStore.ts
import { create } from 'zustand';

export const audioQueueStore = create<{
  currentUrl: string | null;
  setUrl: (url: string | null) => void;
}>((set) => ({
  currentUrl: null,
  setUrl: (url) => set({ currentUrl: url }),
}));
