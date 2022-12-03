"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Demo extends Phaser.Scene {
    constructor() {
        super('demo');
    }
    preload() { }
    create() {
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);
        this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);
    }
}
exports.default = Demo;
