import dialogueData from '../../assets/dialogues/demo.json'
import DialoguePlugin from '../../plugin/main';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('demo')
  }

  preload() {
    this.load.json('demoDialogue', dialogueData);
  }

  create() {
    console.log('create demo scene')
    let plugin = this.plugins.get('DialoguePlugin') as DialoguePlugin;

    console.log(this.cache.json.get('demoDialogue'));

    plugin.startDialogue(this.scene.key, this.cache.json.get('demoDialogue'))

    console.log(dialogueData)

  }
}
