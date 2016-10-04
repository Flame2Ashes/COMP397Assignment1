//Source file: STAY.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016
//Decision made: STAY

module scenes {
    export class STAY extends objects.Scene {
         // PRIVATE VARIABLES
        private _gameLabel : objects.Label; //Text line 1
        private _gameLabel1 : objects.Label; //Text line 2
        private _gameLabel2 : objects.Label; //Text line 3
        private _gameLabel3 : objects.Label; //Text line 4
        private _gameButton1 : objects.Button; //Option 1
        private _gameButton2 : objects.Button; //Option 2
        private _gamebg : createjs.Bitmap; //The background

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Decision made: STAY. Scene started");

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
        }

        public update() : void {
            // Update objects
        }

        private _onButton1Click(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.LIGHT;
            changeScene();
        }

        private _onButton2Click(event : createjs.MouseEvent) {
            scene = config.Scene.TORCH;
            changeScene();
        }
    }
}