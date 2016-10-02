/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

//Intro scene
/*A few days ago, you and your brother discovered a cave. You didn't go into the cave, but you are pretty sure that there is something inside that cave. 
You planned to go alone, but your brother ended up following you.

"Come on!" He said. "You never let me go anywhere with you!"

"You're too young," you reply. "What if there's something dangerous in the cave?"

"I can take care of myself," your brother says, puffing up his chest. "Can't I go with you this one time?"
*/

module scenes {
    export class Game extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel1 : objects.Label; //Text line 1
        private _gameLabel2 : objects.Label; //Text line 2
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
            this._gameLabel1 = new objects.Label("A few days ago, you discovered a cave.", "30px Consolar", "#000000", config.Screen.CENTER_X, 10);
            this.addChild(this._gameLabel1);

            // Create buttons for scene and add to Game Scene container. Register for onclick events
            this._gameButton1 = new objects.Button("STAY", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton1);
            this._gameButton1.on("click", this._onButton1Click, this);

            this._gameButton2 = new objects.Button("COME", 120, config.Screen.CENTER_Y + 150);
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