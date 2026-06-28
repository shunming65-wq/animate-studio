import { useRef, useEffect, useState } from 'react'
import { useEditorStore } from '../../store/useEditorStore'

export default function DrawingCanvas() {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastX, setLastX] = useState(0)
  const [lastY, setLastY] = useState(0)
  const { selectedTool, strokeColor, brushSize } = useEditorStore()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, '#1a1f3a')
    gradient.addColorStop(1, '#0a0e27')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const handleMouseDown = (e) => {
    setIsDrawing(true)
    const rect = canvasRef.current.getBoundingClientRect()
    setLastX(e.clientX - rect.left)
    setLastY(e.clientY - rect.top)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const handleMouseMove = (e) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (selectedTool === 'brush') {
      ctx.strokeStyle = strokeColor
      ctx.lineWidth = brushSize
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.beginPath()
      ctx.moveTo(lastX, lastY)
      ctx.lineTo(x, y)
      ctx.stroke()
    } else if (selectedTool === 'eraser') {
      ctx.clearRect(x - brushSize / 2, y - brushSize / 2, brushSize, brushSize)
    }

    setLastX(x)
    setLastY(y)
  }

  return (
    <div className="flex-1 bg-dark rounded-lg border border-indigo-500/20 overflow-hidden relative shadow-2xl shadow-indigo-500/10">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
      />
    </div>
  )
}
