# Go Kart Racesim

A simple 2D kart racing game built with HTML5 Canvas, JavaScript, Electron, and Electron Builder.

## Current Status

Phase 1 (Foundation)

Current features:

* HTML5 Canvas rendering
* Electron desktop support
* Asset loading system
* Input system
* Camera system
* Event system
* Game loop
* Windows packaging support

Planned features:

* Kart movement
* Acceleration and braking
* Drifting
* AI racers
* Multiple tracks
* Lap timing
* Leaderboards
* Audio system
* Save data

---

## Project Structure

```text
go-kart-racesim/
├── assets/
├── css/
├── data/
├── js/
├── electron-main.js
├── preload.js
├── package.json
└── index.html
```

---

## Requirements

* Node.js 20+
* pnpm (recommended)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/go-kart-racesim.git
cd go-kart-racesim
```

Install dependencies:

```bash
pnpm install
```

---

## Running

Start the Electron application:

```bash
pnpm start
```

---

## Building

Create a production build:

```bash
pnpm build
```

Build output will be generated in:

```text
dist/
```

---

## Assets

Game assets are stored in:

```text
assets/
├── images/
├── sounds/
└── fonts/
```

Current kart sprite:

```text
assets/images/kart.png
```

---

## License

MIT License

See LICENSE for details.

---

## Roadmap

### Phase 1

* Engine foundation
* Electron integration
* Asset loading

### Phase 2

* Playable kart
* WASD controls
* Camera follow
* Track boundaries

### Phase 3

* Lap timing
* HUD
* Checkpoints

### Phase 4

* AI racers
* Race logic
* Multiple tracks

### Phase 5

* Sound effects
* Menus
* Settings
* Release builds

---

## Contributing

Issues and pull requests are welcome.

Please test changes before submitting them.

---

## Acknowledgements

Built using:

* Electron
* Electron Builder
* HTML5 Canvas
* JavaScript
* Node.js
* pnpm
