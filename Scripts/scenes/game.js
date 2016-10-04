/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/
//Source file: game.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016
//Intro scene
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Game.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("CaveEntrance"));
            this._gamebg.alpha = 0.3;
            this.addChild(this._gamebg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel1 = new objects.Label("A few days ago, you discovered a cave.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this.addChild(this._gameLabel1);
            this._gameLabel2 = new objects.Label("Today, you intend to explore that cave.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80);
            this.addChild(this._gameLabel2);
            this._gameLabel3 = new objects.Label("Your brother, having followed you there, begs you to take him with you inside.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 60);
            this.addChild(this._gameLabel3);
            this._gameLabel4 = new objects.Label("'What if there's something dangerous in there?' You ask.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 40);
            this.addChild(this._gameLabel4);
            this._gameLabel5 = new objects.Label("'I can take care of myself!' he says.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 20);
            this.addChild(this._gameLabel5);
            this._gameLabel6 = new objects.Label("You tell your brother to: ", "30px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y + 10);
            this.addChild(this._gameLabel6);
            // Create buttons for scene and add to Game Scene container. Register for onclick events
            this._gameButton1 = new objects.Button("STAY", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton1);
            this._gameButton1.on("click", this._onButton1Click, this);
            this._gameButton2 = new objects.Button("COME", 120, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton2);
            this._gameButton2.on("click", this._onButton2Click, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Game.prototype.update = function () {
            // Update objects
        };
        Game.prototype._onButton1Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.STAY;
            changeScene();
        };
        Game.prototype._onButton2Click = function (event) {
            scene = config.Scene.COME;
            changeScene();
        };
        return Game;
    })(objects.Scene);
    scenes.Game = Game;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map