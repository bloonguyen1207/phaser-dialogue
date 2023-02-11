import textbox from '../../assets/images/textbox1.png';

export default class Demo extends Phaser.Scene {
    constructor ()
    {
        super('demo');
    }

    preload () {
        this.load.image("test_textbox", textbox)
    }

    create () {
        this.add.text(50, 50, "Hello world!")
        this.add.image(100, 200, "test_textbox")
    }
}