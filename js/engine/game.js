import { Renderer } from "./renderer.js";
import { Input } from "./input.js";
import { Camera } from "./camera.js";
import { AssetLoader } from "./assetLoader.js";

export class Game {
    constructor() {
        this.canvas = document.getElementById("game");

        this.renderer = new Renderer(this.canvas);
        this.input = new Input();
        this.camera = new Camera();
        this.assets = new AssetLoader();

        this.lastTime = 0;

        this.renderer.resize();
        window.addEventListener("resize", () => this.renderer.resize());
    }

    async load() {
        await this.assets.loadImage(
            "kart",
            "assets/images/kart.png"
        );
    }

    update(dt) {
        this.camera.update();
    }

    render() {
        const ctx = this.renderer.ctx;

        this.renderer.clear();

        ctx.fillStyle = "#2e8b57";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "#666";
        ctx.fillRect(100, 100, this.canvas.width - 200, this.canvas.height - 200);

        const kart = this.assets.get("kart");

        if (kart) {
            ctx.drawImage(
                kart,
                this.canvas.width / 2 - 32,
                this.canvas.height / 2 - 16,
                64,
                32
            );
        }
    }

    loop = (t) => {
        const dt = (t - this.lastTime) / 1000;
        this.lastTime = t;

        this.update(dt);
        this.render();

        requestAnimationFrame(this.loop);
    };

    async start() {
        await this.load();
        requestAnimationFrame(this.loop);
    }
}