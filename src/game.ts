import 'phaser';
import Demo from './scenes/demo';

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Phaser.Game(config);