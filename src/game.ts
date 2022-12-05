import 'phaser';
import Demo from './scenes/demo';
import DialoguePlugin from './main';


const config = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#557153',
    width: 1280,
    height: 720,
    plugins: {
        scene: [
            { key: "DialoguePlugin", plugin: DialoguePlugin, mapping: "DialoguePlugin" },
        ]
    }
,
    scene: [ Demo ],
    // callbacks: {
    //     postBoot: function () {
    //       game.canvas.style.width = '100%';
    //       game.canvas.style.height = '100%';
    //     }
    //   }
};

var game = new Phaser.Game(config);