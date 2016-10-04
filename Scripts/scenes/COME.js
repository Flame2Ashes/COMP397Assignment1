//Source file: COME.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Decision made: COME
var scenes;
(function (scenes) {
    var COME = (function (_super) {
        __extends(COME, _super);
        function COME() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        COME.prototype.start = function () {
            // Add objects to the scene
            console.log("Decision made: COME");
            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Scene2"));
            this._gamebg.alpha = 0.3;
            this.addChild(this._gamebg);
            // Add Text
            this._gameLabel = new objects.Label("You allowed your brother to come.", "40px Consolar", "#000000", config.Screen.CENTER_X, 30);
            this.addChild(this._gameLabel);
            this._gameLabel1 = new objects.Label("Delighted, he walks beside you as you enter the cave.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this.addChild(this._gameLabel1);
            this._gameLabel2 = new objects.Label("A little further into the cave, your brother notices a dropped shovel and pickaxe.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80);
            this.addChild(this._gameLabel2);
            this._gameLabel3 = new objects.Label("You take both, but you give your brother the: ", "30px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 40);
            this.addChild(this._gameLabel3);
            // Create buttons for scene and add to Game Scene container. Register for onclick events
            this._gameButton1 = new objects.Button("PICKAXE", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton1);
            this._gameButton1.on("click", this._onButton1Click, this);
            this._gameButton2 = new objects.Button("SHOVEL", 120, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton2);
            this._gameButton2.on("click", this._onButton2Click, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        COME.prototype.update = function () {
            // Update objects
        };
        COME.prototype._onButton1Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.PICKAXE;
            changeScene();
        };
        COME.prototype._onButton2Click = function (event) {
            scene = config.Scene.SHOVEL;
            changeScene();
        };
        return COME;
    })(objects.Scene);
    scenes.COME = COME;
})(scenes || (scenes = {}));
//# sourceMappingURL=COME.js.map