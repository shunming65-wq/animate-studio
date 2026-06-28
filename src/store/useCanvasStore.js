import { create } from 'zustand'

export const useCanvasStore = create((set) => ({
  // Layer State
  layers: [{ id: 1, name: 'Layer 1', visible: true, opacity: 1 }],
  selectedLayer: 1,

  addLayer: () => set((state) => {
    const newId = Math.max(...state.layers.map(l => l.id)) + 1
    return {
      layers: [...state.layers, { id: newId, name: `Layer ${newId}`, visible: true, opacity: 1 }],
    }
  }),

  deleteLayer: (id) => set((state) => ({
    layers: state.layers.filter(l => l.id !== id),
  })),

  selectLayer: (id) => set({ selectedLayer: id }),

  updateLayer: (id, updates) => set((state) => ({
    layers: state.layers.map(l => l.id === id ? { ...l, ...updates } : l),
  })),
}))
