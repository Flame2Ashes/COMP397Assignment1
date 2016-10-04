//Source file: PICKAXE.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016
//Decision Tree: COME > GIVE PICKAXE

module scenes {
    export class PICKAXE extends objects.Scene {
         // PRIVATE VARIABLES
        private _gameLabel : objects.Label; //Text
        private _gameLabel1 : objects.Label; //Text line 1
        private _gameLabel2 : objects.Label; //Text line 2
        private _gameLabel3 : objects.Label; //Text line 3
        private _gameLabel4 : objects.Label; //Text line 4
        private _gameLabel5 : objects.Label; //Text line 5
        private _gameButton1 : objects.Button; //Option 1
        private _gameButton2 : objects.Button; //Option 2
        private _gamebg : createjs.Bitmap; //The background

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
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
        }

        public update() : void {
            // Update objects
        }

        private _onButton1Click(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.RIGHTA;
            changeScene();
        }

        private _onButton2Click(event : createjs.MouseEvent) {
            scene = config.Scene.LEFTA;
            changeScene();
        }
    }
}