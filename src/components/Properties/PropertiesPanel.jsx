import { useEditorStore } from '../../store/useEditorStore'

export default function PropertiesPanel() {
  const { strokeColor, setStrokeColor, brushSize, setBrushSize, brushOpacity, setBrushOpacity } = useEditorStore()

  return (
    <div className="bg-dark rounded-lg p-4 border border-indigo-500/20 glass-effect h-full flex flex-col gap-4 overflow-y-auto">
      <h3 className="text-sm font-semibold text-indigo-400">Properties</h3>

      <div>
        <label className="text-xs text-gray-400 block mb-2">Stroke Color</label>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            value={strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
            className="w-12 h-12 rounded cursor-pointer border border-indigo-500/20"
          />
          <span className="text-xs font-mono text-gray-400">{strokeColor}</span>
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-400 block mb-2">Brush Size: {brushSize}px</label>
        <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
          className="w-full accent-indigo-500"
        />
      </div>

      <div>
        <label className="text-xs text-gray-400 block mb-2">Opacity: {Math.round(brushOpacity * 100)}%</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={brushOpacity}
          onChange={(e) => setBrushOpacity(Number(e.target.value))}
          className="w-full accent-pink-500"
        />
      </div>
    </div>
  )
}
