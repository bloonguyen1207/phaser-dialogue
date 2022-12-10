//import textbox from '../assets/textbox.png';
export default class Demo extends Phaser.Scene {
    constructor ()
    {
        super('demo');
    }

    preload () {
//        this.load.image("textbox", textbox)
    }

    create () {
        this.add.text(50, 50, "Hello world!")
        this.add.image(200, 200, '../assets/textbox.png')
    }
}