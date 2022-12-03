"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("phaser");
const demo_1 = __importDefault(require("./scenes/demo"));
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: demo_1.default
};
const game = new Phaser.Game(config);
