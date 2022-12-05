import { Plugins, Scene, Scenes } from "phaser";
import Phaser from "phaser";

const register = (PluginManager: Plugins.PluginManager): void => {
    PluginManager.installScenePlugin('DialoguePlugin', DialoguePlugin, 'dialogue')
}

class DialoguePlugin {
    // Scene
    scene: Scene | undefined;
    systems: Scenes.Systems;
    // Image of Dialogue Frame
    dialogue: Phaser.GameObjects.Image | undefined;
    // Data of Dialogue Frame
    dialogueName = "";
    dialogueURL = "";
    visible = false;
    // Constructor
    constructor(scene: Scene, name: string, url: string) {
        //  The Scene that owns this plugin
        this.scene = scene;
        this.systems = scene.sys
        // Load assets
        this.setDialogueFrame(name, url);
        this.dialogue = new Phaser.GameObjects.Image(this.scene, this.setBackground().frameX, this.setBackground().frameY, this.dialogueName);
        // Boot if not booted
        if (!scene.sys.settings.isBooted) scene.sys.events.once('boot', this.boot, this);
    }

    //  Called when the Plugin is booted by the PluginManager.
    //  If you need to reference other systems in the Scene (like the Loader or DisplayList) then set-up those references now, not in the constructor.
    boot() {
        const eventEmitter = this.systems.events;
        //  Listening to the following events is entirely optional, although we would recommend cleanly shutting down and destroying at least.
        //  If you don't need any of these events then remove the listeners and the relevant methods too.
        eventEmitter.on('start', this.start, this);
        eventEmitter.on('preupdate', this.preUpdate, this);
        eventEmitter.on('update', this.update, this);
        eventEmitter.on('postupdate', this.postUpdate, this);
        eventEmitter.on('pause', this.pause, this);
        eventEmitter.on('resume', this.resume, this);
        eventEmitter.on('sleep', this.sleep, this);
        eventEmitter.on('wake', this.wake, this);
        eventEmitter.on('shutdown', this.shutdown, this);
        eventEmitter.on('destroy', this.destroy, this);
    }

    //  Called when a Scene is started by the SceneManager. The Scene is now active, visible and running.
    start() {
    }

     //  Called every Scene step - phase 1
    preUpdate(_time: any, _delta: any) {}

    //  Called every Scene step - phase 2
    update(_time: any, _delta: any) {}

    //  Called every Scene step - phase 3
    postUpdate(_time: any, _delta: any) {}

    //  Called when a Scene is paused. A paused scene doesn't have its Step run, but still renders.
    pause() {}

    //  Called when a Scene is resumed from a paused state.
    resume() {}

    //  Called when a Scene is put to sleep. A sleeping scene doesn't update or render, but isn't destroyed or shutdown. preUpdate events still fire.
    sleep() {}

    //  Called when a Scene is woken from a sleeping state.
    wake() {}

    //  Called when a Scene shuts down, it may then come back again later (which will invoke the 'start' event) but should be considered dormant.
    shutdown() {}

    //  Called when a Scene is destroyed by the Scene Manager. There is no coming back from a destroyed Scene, so clear up all resources here.
    destroy() {
        this.shutdown();
        this.scene = undefined;
    }

    setDialogueFrame(name:string, url: string) {
        this.dialogueName = name;
        this.dialogueURL = url;
    }

    loadDialogueFrame() {
        if (this.scene != undefined) {
            if (this.dialogueURL != "" && this.dialogueName != "" ) 
            {
                this.scene?.load.image(this.dialogueName, this.dialogueURL);
            }
            else {
                console.log("You have not set the data for Dialogue Frame");
            }
        }
    }
    addDialogueFrame() {
        if (this.scene != undefined) {
            if (this.dialogueURL != "" && this.dialogueName != "") 
            {
                this.scene.add.image(Number(this.dialogue?.x), Number(this.dialogue?.y), String(this.dialogue?.name));
            }
            else {
                console.log("You have not set the data for Dialogue Frame");
            }
        }
    }
    calculateWindowDimensions() {
        var gameHeight = Number(this.scene?.sys.game.config.height);
		var gameWidth = Number(this.scene?.sys.game.config.width);;
        var x = 0;
        var y = 0;
        var width = gameWidth;
        var height = gameHeight;
        return {
            x,
            y,
            width,
            height 
        }
	}

    setBackground() {
		let dimensions = this.calculateWindowDimensions();
        let frameX: number;
        let frameY: number;
        let frameWidth: number;
        let frameHeight: number;
        frameX = dimensions.x + 15;
        frameY = dimensions.height / 1.735;
        frameWidth = dimensions.width - 30;
        frameHeight = dimensions.height / 2.5;
        return {frameX, frameY};
	}

    setAlpha(value: number) {
        this.dialogue?.setAlpha(value);
    }
}

export default DialoguePlugin