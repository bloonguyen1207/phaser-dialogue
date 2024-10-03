import 'phaser'
import Boot from './scenes/boot'
import Demo from './scenes/demo'
import DialoguePlugin from '../plugin/main'

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#125555',
  plugins: {
    global: [
      {
        key: 'DialoguePlugin',
        plugin: DialoguePlugin,
        start: true,
        mapping: 'dialogue',
      }
    ]
  },
  scene: [
    Boot,
    Demo
  ],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  }
}

const game = new Phaser.Game(config)
