//Decision made: STAY
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var STAY = (function (_super) {
        __extends(STAY, _super);
        function STAY() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        STAY.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Scene2"));
            this._gamebg.alpha = 0.3;
            this.addChild(this._gamebg);
            // Add Text
            this._gameLabel = new objects.Label("You told your brother to stay.", "40px Consolar", "#000000", config.Screen.CENTER_X, 30);
            this.addChild(this._gameLabel);
            this._gameLabel1 = new objects.Label("Grudgingly, he obeys and stays watch outside the entrance.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this.addChild(this._gameLabel1);
            this._gameLabel2 = new objects.Label("As you enter the cave, you notice that it gets darker the deeper it gets.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80);
            this.addChild(this._gameLabel2);
            this._gameLabel3 = new objects.Label("You can light a torch, but you wonder if it will attract creatures.", "25px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 40);
            this.addChild(this._gameLabel3);
            // Create buttons for scene and add to Game Scene container. Register for onclick events
            this._gameButton1 = new objects.Button("LIGHT", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton1);
            this._gameButton1.on("click", this._onButton1Click, this);
            this._gameButton2 = new objects.Button("TORCH", 120, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton2);
            this._gameButton2.on("click", this._onButton2Click, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        STAY.prototype.update = function () {
            // Update objects
        };
        STAY.prototype._onButton1Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.LIGHT;
            changeScene();
        };
        STAY.prototype._onButton2Click = function (event) {
            scene = config.Scene.TORCH;
            changeScene();
        };
        return STAY;
    })(objects.Scene);
    scenes.STAY = STAY;
})(scenes || (scenes = {}));
//# sourceMappingURL=STAY.js.map