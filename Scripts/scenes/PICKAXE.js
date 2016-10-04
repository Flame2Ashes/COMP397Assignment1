//Source file: PICKAXE.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016
//Decision Tree: COME > GIVE PICKAXE
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var PICKAXE = (function (_super) {
        __extends(PICKAXE, _super);
        function PICKAXE() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        PICKAXE.prototype.start = function () {
            // Add objects to the scene
            console.log("Decision made: Pickaxe. Scene started");
            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Scene3"));
            this._gamebg.alpha = 0.3;
            this.addChild(this._gamebg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("You gave your brother the pickaxe.", "40px Consolar", "#000000", config.Screen.CENTER_X, 30);
            this.addChild(this._gameLabel);
            // Add Text
            this._gameLabel1 = new objects.Label("You continue walking down the cave.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this.addChild(this._gameLabel1);
            this._gameLabel2 = new objects.Label("Eventually, you find a fork in the cave.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80);
            this.addChild(this._gameLabel2);
            this._gameLabel3 = new objects.Label("The left is lit well with torches.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 60);
            this.addChild(this._gameLabel3);
            this._gameLabel4 = new objects.Label("The right only has a faint light at the end of the tunnel.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 40);
            this.addChild(this._gameLabel4);
            this._gameLabel5 = new objects.Label("Which way do you go?", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 20);
            this.addChild(this._gameLabel5);
            // Create buttons for scene and add to Game Scene container. Register for onclick events
            this._gameButton1 = new objects.Button("RIGHT", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton1);
            this._gameButton1.on("click", this._onButton1Click, this);
            this._gameButton2 = new objects.Button("LEFT", 120, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton2);
            this._gameButton2.on("click", this._onButton2Click, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        PICKAXE.prototype.update = function () {
            // Update objects
        };
        PICKAXE.prototype._onButton1Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.RIGHTA;
            changeScene();
        };
        PICKAXE.prototype._onButton2Click = function (event) {
            scene = config.Scene.LEFTA;
            changeScene();
        };
        return PICKAXE;
    })(objects.Scene);
    scenes.PICKAXE = PICKAXE;
})(scenes || (scenes = {}));
//# sourceMappingURL=PICKAXE.js.map