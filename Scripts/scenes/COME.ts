//Decision made: COME

module scenes {
    export class COME extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label; //Text line 1
        private _gameLabel1 : objects.Label; //Text line 2
        private _gameLabel2 : objects.Label; //Text line 3
        private _gameLabel3 : objects.Label; //Text line 4
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