//Decision made: COME
/*"Alright," you finally say. "You can come along."

Your brother's face instantly lit up.

"But you have to stay close, okay?"

"Okay!"

And with that, you both enter the cave.

Something something.

"Hey, look!" Your brother says. "Someone left a shovel and a pickaxe here."

You look over, and there is indeed a shovel and a pickaxe, slightly buried under some rubble and...something you definitely hope isn't a dead person.

"We should take them," you say. "You never know if we might need them."

You can give your brother either the shovel or the pickaxe to hold. You decide to give him:
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            this._gamebg.alpha = 0.5;
            this.addChild(this._gamebg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("You allowed your brother to come.", "40px Consolar", "#000000", config.Screen.CENTER_X, 10);
            this.addChild(this._gameLabel);
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