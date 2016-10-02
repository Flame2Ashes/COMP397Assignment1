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

module scenes {
    export class COME extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label; //Text
        private _gameButton1 : objects.Button; //Option 1
        private _gameButton2 : objects.Button; //Option 2
        private _gamebg : createjs.Bitmap; //The background

        constructor() 
        {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
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
        }

        public update() : void {
            // Update objects
        }

        private _onButton1Click(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.PICKAXE;
            changeScene();
        }

        private _onButton2Click(event : createjs.MouseEvent) {
            scene = config.Scene.SHOVEL;
            changeScene();
        }
    }
}