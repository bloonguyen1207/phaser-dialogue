import textbox from '../../assets/images/textbox1.png';
import DialoguePlugin from '../../plugin/main';

export default class Boot extends Phaser.Scene {
    constructor() {
        super('boot')
    }

    preload(): void {
        this.load.image('test_textbox', textbox)
    }

    create(): void {
        console.log('create boot scene');
        let plugin = this.plugins.get('DialoguePlugin') as DialoguePlugin;

        plugin.setFrame('test_textbox');

        const enter = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        enter?.on('down', () => { this.scene.start('demo'); });
    }
}
