import { useCanvasStore } from '../../store/useCanvasStore'
import { Plus, Trash2, Eye, EyeOff } from 'lucide-react'

export default function LayerPanel() {
  const { layers, selectedLayer, addLayer, deleteLayer, selectLayer, updateLayer } = useCanvasStore()

  return (
    <div className="bg-dark rounded-lg p-3 border border-indigo-500/20 glass-effect flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-indigo-400">Layers</h3>
        <button
          onClick={addLayer}
          className="p-1 rounded hover:bg-indigo-500/20 transition"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1">
        {layers.map((layer) => (
          <div
            key={layer.id}
            className={`p-2 rounded-lg flex items-center gap-2 cursor-pointer transition ${
              selectedLayer === layer.id
                ? 'bg-indigo-500/30 border border-indigo-400'
                : 'bg-darker hover:bg-indigo-500/10'
            }`}
            onClick={() => selectLayer(layer.id)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                updateLayer(layer.id, { visible: !layer.visible })
              }}
              className="hover:text-indigo-400 transition"
            >
              {layer.visible ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
            <span className="flex-1 text-sm">{layer.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                deleteLayer(layer.id)
              }}
              className="hover:text-red-400 transition"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
