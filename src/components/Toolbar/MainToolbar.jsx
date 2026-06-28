import { useEditorStore } from '../../store/useEditorStore'
import { Pen, Eraser, Square, Circle } from 'lucide-react'

const tools = [
  { id: 'brush', icon: Pen, label: 'Brush' },
  { id: 'eraser', icon: Eraser, label: 'Eraser' },
  { id: 'rect', icon: Square, label: 'Rectangle' },
  { id: 'circle', icon: Circle, label: 'Circle' },
]

export default function MainToolbar() {
  const { selectedTool, setSelectedTool } = useEditorStore()

  return (
    <div className="bg-dark rounded-lg p-3 border border-indigo-500/20 glass-effect">
      <h3 className="text-sm font-semibold mb-3 text-indigo-400">Tools</h3>
      <div className="grid grid-cols-2 gap-2">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`p-3 rounded-lg flex flex-col items-center gap-1 transition ${
                selectedTool === tool.id
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                  : 'bg-darker hover:bg-indigo-500/20 text-gray-300'
              }`}
              title={tool.label}
            >
              <Icon size={20} />
              <span className="text-xs">{tool.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
