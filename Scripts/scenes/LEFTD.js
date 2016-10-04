//Source file: LEFTD.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Decision tree: STAY > DO NOT > GO LEFT
var scenes;
(function (scenes) {
    var LEFTD = (function (_super) {
        __extends(LEFTD, _super);
        function LEFTD() {
            _super.call(this);
        }
        //PUBLIC FUNCTIONS
        LEFTD.prototype.start = function () {
            //Add objects to the scene
            console.log("Decision made: left. Scene started");
            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Scene4Left"));
            this._gamebg.alpha = 0.3;
            this.addChild(this._gamebg);
            // Add text
            this._gameLabel = new objects.Label("You turned left.", "40px Consolar", "#000000", config.Screen.CENTER_X, 30);
            this.addChild(this._gameLabel);
            this._gameLabel2 = new objects.Label("While walking down the tunnel, all the torches go out. A trap!", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this.addChild(this._gameLabel2);
            this._gameLabel3 = new objects.Label("Unfortunately, you are eaten by grues.", "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 50);
            this.addChild(this._gameLabel3);
            // Create Start over button
            this._gameButton = new objects.Button("STARTOVER", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onButtonClick, this);
            stage.addChild(this);
        };
        LEFTD.prototype.update = function () {
            // Update objects
        };
        LEFTD.prototype._onButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return LEFTD;
    })(objects.Scene);
    scenes.LEFTD = LEFTD;
})(scenes || (scenes = {}));
//# sourceMappingURL=LEFTD.js.map