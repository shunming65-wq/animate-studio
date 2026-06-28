# ✨ Animate Studio

A web-based animation editor inspired by Adobe Animate with a lively, modern interface.

## Features

- 🎨 **Drawing Tools** - Brush, eraser, and shape tools
- 📐 **Timeline & Keyframes** - Frame-by-frame animation support
- 📚 **Layer Management** - Organize and manage multiple layers
- 🎯 **Properties Panel** - Control stroke, color, and opacity
- 🎪 **Modern Interface** - Glass-morphism effects and vibrant colors
- ⚡ **Real-time Preview** - See changes instantly

## Quick Start

### Prerequisites
- Node.js 14+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shunming65-wq/animate-studio.git
cd animate-studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Zustand** - State management
- **Lucide React** - Icon library
- **Canvas API** - Drawing capabilities

## Project Structure

```
src/
├── components/
│   ├── Canvas/          # Drawing canvas components
│   ├── Timeline/        # Timeline and frame management
│   ├── Layers/          # Layer panel
│   ├── Toolbar/         # Tool selection
│   ├── Properties/      # Property controls
│   └── UI/              # Header and layout
├── store/               # Zustand state management
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── styles/              # Global styles
```

## Usage

### Drawing
1. Select a tool from the toolbar (Brush, Eraser, etc.)
2. Adjust brush size and color in the properties panel
3. Click and drag on the canvas to draw

### Timeline Animation
1. Click "Add Frame" to create new frames
2. Select a frame and draw on the canvas
3. Click Play to preview the animation

### Layers
1. Add layers using the + button in the Layers panel
2. Click on a layer to select it
3. Toggle visibility with the eye icon

## Contributing

Contributions are welcome! Feel free to submit pull requests.

## License

MIT License - feel free to use this project for personal and commercial use.

## Future Enhancements

- [ ] Motion tweening
- [ ] Shape tools (rectangles, circles, polygons)
- [ ] Vector shape support
- [ ] Animation presets
- [ ] Export to MP4/GIF
- [ ] Undo/Redo history
- [ ] Onion skinning
- [ ] Grid and guides
- [ ] Color palette management
- [ ] Project saving and loading
