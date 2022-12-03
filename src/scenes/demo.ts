export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload () {}

    create () {
        this.add.text(50, 50, "Hello world!")
    }
}