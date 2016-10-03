//Decision tree: STAY > DO NOT > GO LEFT
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            this._gamebg.alpha = 0.5;
            this.addChild(this._gamebg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("You turned left.", "40px Consolar", "#000000", config.Screen.CENTER_X, 10);
            this.addChild(this._gameLabel);
            // Create buttons for scene and add to Game Scene container. Register for onclick events
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