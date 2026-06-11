export class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.target = null;
    }

    follow(target) {
        this.target = target;
    }

    update() {
        if (!this.target) return;

        this.x = this.target.x;
        this.y = this.target.y;
    }
}