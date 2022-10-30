

const DialoguePlugin = scene => {
    
    this.scene = scene;
    this.systems = scene.sys

    if (!scene.sys.settings.isBooted)
    {
        scene.sys.events.once('boot', this.boot, this);
    }
}

DialoguePlugin.register = PluginManager => {
    PluginManager.register('DialoguePlugin', DialoguePlugin, 'dialogue')
}