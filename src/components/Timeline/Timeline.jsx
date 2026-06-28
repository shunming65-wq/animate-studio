import { useTimelineStore } from '../../store/useTimelineStore'
import { Play, Pause, Plus, Trash2 } from 'lucide-react'

export default function Timeline() {
  const { frames, currentFrame, isPlaying, togglePlayback, addFrame, setCurrentFrame, deleteFrame } = useTimelineStore()

  return (
    <div className="bg-dark rounded-lg p-3 border border-indigo-500/20 glass-effect">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-indigo-400">Timeline ({frames.length} frames)</h3>
        <div className="flex gap-2">
          <button
            onClick={togglePlayback}
            className="p-2 rounded-lg hover:bg-indigo-500/20 transition"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            onClick={addFrame}
            className="p-2 rounded-lg hover:bg-indigo-500/20 transition"
            title="Add Frame"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {frames.map((_, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => setCurrentFrame(index)}
              className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-sm font-semibold transition ${                currentFrame === index
                  ? 'bg-indigo-500 border-indigo-300 shadow-lg shadow-indigo-500/50'
                  : 'bg-darker border-indigo-500/20 hover:border-indigo-400'
              }`}
            >
              {index + 1}
            </button>
            <button
              onClick={() => deleteFrame(index)}
              className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
              title="Delete frame"
            >
              <Trash2 size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
