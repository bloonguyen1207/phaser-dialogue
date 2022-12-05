import Phaser from "phaser";
import DialoguePlugin from "../main";

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload () {}

    create () {
        this.add.text(50, 50, "Hello world!");
        var plug = new DialoguePlugin(this, "frame1", "C:\\Users\\quanv\\OneDrive\\Desktop\\Project\\phaser-dialogue-master\\src\\assets\\frame1.png");
        plug.loadDialogueFrame();
        plug.addDialogueFrame();
    }
}