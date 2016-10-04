/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var menuScene;
var gameScene;
// Preload Assets required
var assetData = [
    { id: "Start", src: "../../Assets/images/Start.png" },
    { id: "CaveEntrance", src: "../../Assets/images/CaveEntrance.jpg" },
    { id: "Scene2", src: "../../Assets/images/Scene2.jpg" },
    { id: "Scene3", src: "../../Assets/images/Scene3.jpg" },
    { id: "Scene4Left", src: "../../Assets/images/Scene4LEFT.jpg" },
    { id: "Scene4Right", src: "../../Assets/images/Scene4RIGHT.jpg" },
    { id: "COME", src: "../../Assets/images/COME.png" },
    { id: "STAY", src: "../../Assets/images/STAY.png" },
    { id: "SHOVEL", src: "../../Assets/images/SHOVEL.png" },
    { id: "PICKAXE", src: "../../Assets/images/PICKAXE.png" },
    { id: "TORCH", src: "../../Assets/images/TORCH.png" },
    { id: "LIGHT", src: "../../Assets/images/LIGHT.png" },
    { id: "LEFT", src: "../../Assets/images/LEFT.png" },
    { id: "RIGHT", src: "../../Assets/images/RIGHT.png" },
    { id: "STARTOVER", src: "../../Assets/images/STARTOVER.png" },
    { id: "MenuScreen", src: "../../Assets/images/menuScreen.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
        //Scene 1 decisions
        case config.Scene.STAY:
            stage.removeAllChildren();
            currentScene = new scenes.STAY();
            console.log("Starting STAY scene");
            break;
        case config.Scene.COME:
            stage.removeAllChildren();
            currentScene = new scenes.COME();
            console.log("Starting COME scene");
            break;
        //Scene 2A decisions
        case config.Scene.SHOVEL:
            stage.removeAllChildren();
            currentScene = new scenes.SHOVEL();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.PICKAXE:
            stage.removeAllChildren();
            currentScene = new scenes.PICKAXE();
            console.log("Starting SHOVEL scene");
            break;
        //Scene 2B decisions
        case config.Scene.TORCH:
            stage.removeAllChildren();
            currentScene = new scenes.TORCH();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.LIGHT:
            stage.removeAllChildren();
            currentScene = new scenes.LIGHT();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.LEFTA:
            stage.removeAllChildren();
            currentScene = new scenes.LEFTA();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.RIGHTA:
            stage.removeAllChildren();
            currentScene = new scenes.RIGHTA();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.LEFTB:
            stage.removeAllChildren();
            currentScene = new scenes.LEFTB();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.RIGHTB:
            stage.removeAllChildren();
            currentScene = new scenes.RIGHTB();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.LEFTC:
            stage.removeAllChildren();
            currentScene = new scenes.LEFTC();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.RIGHTC:
            stage.removeAllChildren();
            currentScene = new scenes.RIGHTC();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.LEFTD:
            stage.removeAllChildren();
            currentScene = new scenes.LEFTD();
            console.log("Starting SHOVEL scene");
            break;
        case config.Scene.RIGHTD:
            stage.removeAllChildren();
            currentScene = new scenes.RIGHTD();
            console.log("Starting SHOVEL scene");
            break;
    }
}
//# sourceMappingURL=game.js.map