import Header from './components/UI/Header'
import MainToolbar from './components/Toolbar/MainToolbar'
import DrawingCanvas from './components/Canvas/DrawingCanvas'
import LayerPanel from './components/Layers/LayerPanel'
import Timeline from './components/Timeline/Timeline'
import PropertiesPanel from './components/Properties/PropertiesPanel'

function App() {
  return (
    <div className="w-screen h-screen bg-darker text-white flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1 gap-2 p-2 overflow-hidden">
        {/* Left Sidebar */}
        <div className="flex flex-col gap-2 w-64">
          <MainToolbar />
          <LayerPanel />
        </div>

        {/* Center Canvas */}
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          <DrawingCanvas />
          <Timeline />
        </div>

        {/* Right Sidebar */}
        <div className="w-64">
          <PropertiesPanel />
        </div>
      </div>
    </div>
  )
}

export default App
