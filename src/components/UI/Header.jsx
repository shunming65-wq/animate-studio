import { Menu, Save, Download, RotateCcw } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-dark border-b border-indigo-500/20 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Menu size={24} className="cursor-pointer hover:text-indigo-400 transition" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          ✨ Animate Studio
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-indigo-500/20 transition" title="Save">
          <Save size={20} />
        </button>
        <button className="p-2 rounded-lg hover:bg-indigo-500/20 transition" title="Export">
          <Download size={20} />
        </button>
        <button className="p-2 rounded-lg hover:bg-indigo-500/20 transition" title="Undo">
          <RotateCcw size={20} />
        </button>
      </div>
    </header>
  )
}
