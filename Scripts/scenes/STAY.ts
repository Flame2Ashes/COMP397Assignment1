//Decision made: STAY
/*"No."

"But-"

"//No//, and that's final. Just stay here and watch, okay?"

Your brother dejectedly kicks a stone. "Fine, okay."

And with that, you enter the cave.

The further you get from the mouth of the cave, the darker it gets. Eventually it is pitch black, but you see that there is a faint, but clear light in the distance. You can feasibly walk towards it, but you are not sure whether there are other things in the cave.
*/

module scenes {
    export class STAY extends objects.Scene {
         // PRIVATE VARIABLES
        private _gameLabel : objects.Label; //Text
        private _gameButton1 : objects.Button; //Option 1
        private _gameButton2 : objects.Button; //Option 2
        private _gamebg : createjs.Bitmap; //The background

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");

            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("CaveEntrance"));
            this._gamebg.alpha = 0.5;
            this.addChild(this._gamebg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Test test test", "40px Consolar", "#000000", config.Screen.CENTER_X, 10);
            this.addChild(this._gameLabel);

            // Create buttons for scene and add to Game Scene container. Register for onclick events
            this._gameButton1 = new objects.Button("STAY", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameButton1);
            this._gameButton1.on("click", this._onButton1Click, this);

            this._gameButton2 = new objects.Button("COME", 50, 100);
            this.addChild(this._gameButton2);
            this._gameButton2.on("click", this._onButton2Click, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onButton1Click(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.STAY;
            changeScene();
        }

        private _onButton2Click(event : createjs.MouseEvent) {
            scene = config.Scene.COME;
            changeScene();
        }
    }
}