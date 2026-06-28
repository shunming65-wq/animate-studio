import { create } from 'zustand'

export const useEditorStore = create((set) => ({
  // Tool State
  selectedTool: 'brush',
  setSelectedTool: (tool) => set({ selectedTool: tool }),

  // Color State
  strokeColor: '#ffffff',
  fillColor: '#6366f1',
  setStrokeColor: (color) => set({ strokeColor: color }),
  setFillColor: (color) => set({ fillColor: color }),

  // Brush State
  brushSize: 5,
  brushOpacity: 1,
  setBrushSize: (size) => set({ brushSize: size }),
  setBrushOpacity: (opacity) => set({ brushOpacity: opacity }),

  // Canvas State
  zoom: 100,
  panX: 0,
  panY: 0,
  setZoom: (zoom) => set({ zoom }),
  setPan: (panX, panY) => set({ panX, panY }),

  // UI State
  showGrid: true,
  showOnionSkin: false,
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
  toggleOnionSkin: () => set((state) => ({ showOnionSkin: !state.showOnionSkin })),
}))
