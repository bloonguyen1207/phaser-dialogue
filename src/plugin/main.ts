import { type Plugins, type Scene, type Scenes } from 'phaser'

class DialoguePlugin extends Phaser.Plugins.BasePlugin {
  frame: string;
  screenWidth: number;
  screenHeight: number;

  constructor(pluginManager: Plugins.PluginManager) {
    super(pluginManager);
    this.frame;
    this.screenWidth;
    this.screenHeight;
  }

  init(): void {
    console.log('init');
    this.screenHeight = this.game.scale.height;
    this.screenWidth = this.game.scale.width;
  }

  start(): void {
    console.log('start');

    let eventEmitter = this.game.events;

    eventEmitter.on('startDialogue', this.startDialogue, this);
  }

  stop(): void {
    console.log('stop');

    let eventEmitter = this.game.events;

    eventEmitter.off('startDialogue', this.startDialogue);
  }

  startDialogue(sceneName: string, data: string): void {
    let json = JSON.stringify(data)
    let scene = this.game.scene.getScene(sceneName)

    console.log(json);

    let cameraWidth = scene.cameras.main.width;
    let cameraHeight = scene.cameras.main.height;

    let dialogueImage = scene.add.image(0, 0, this.frame)

    Phaser.Display.Align.In.BottomCenter(dialogueImage, scene.add.zone(0, 0, cameraWidth, cameraHeight))

    dialogueImage.setScale(Math.max(cameraWidth / dialogueImage.width, cameraHeight / dialogueImage.height * 0.02))
  }

  setFrame(name: string) {
    this.frame = name;
  }
}

export default DialoguePlugin
