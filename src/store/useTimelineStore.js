import { create } from 'zustand'

export const useTimelineStore = create((set) => ({
  // Timeline State
  frames: [[]],
  currentFrame: 0,
  isPlaying: false,
  fps: 24,

  setCurrentFrame: (frame) => set({ currentFrame: frame }),
  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setFPS: (fps) => set({ fps }),

  addFrame: () => set((state) => ({
    frames: [...state.frames, []],
  })),

  deleteFrame: (index) => set((state) => ({
    frames: state.frames.filter((_, i) => i !== index),
  })),

  duplicateFrame: (index) => set((state) => ({
    frames: [
      ...state.frames.slice(0, index + 1),
      [...state.frames[index]],
      ...state.frames.slice(index + 1),
    ],
  })),
}))
