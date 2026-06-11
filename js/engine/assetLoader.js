export class AssetLoader {
    constructor() {
        this.images = new Map();
    }

    loadImage(name, src) {
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => {
                this.images.set(name, img);
                resolve(img);
            };

            img.onerror = reject;
            img.src = src;
        });
    }

    get(name) {
        return this.images.get(name);
    }
}