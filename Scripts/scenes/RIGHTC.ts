//Source file: RIGHTC.ts
//Author name: Angelina Gutierrez
//Last modified: October 3rd 2016

// Decision tree: STAY > LIGHT TORCH > TURN RIGHT

module scenes {
    export class RIGHTC extends objects.Scene {
        //PRIVATE VARIABLES
        private _gameLabel : objects.Label; //Text
        private _gameLabel2 : objects.Label; //Text
        private _gameLabel3 : objects.Label; //Text
        private _gameLabel4 : objects.Label; //Text
        private _gameLabel5 : objects.Label; //Text
        private _gameLabel6 : objects.Label; //Text
        private _gameButton : objects.Button; //Button
        private _gamebg : createjs.Bitmap; //Background

        constructor() {
            super();
        }

        //PUBLIC FUNCTIONS
        public start() : void {
            //Add objects to the scene
            console.log("Decision made: right. Scene started");

             //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Scene4Right"));
            this._gamebg.alpha = 0.3;
            this.addChild(this._gamebg);

            // Add text
            this._gameLabel = new objects.Label("You turned right.", "40px Consolar", "#000000", config.Screen.CENTER_X, 30);
            this.addChild(this._gameLabel);

            this._gameLabel2 = new objects.Label("You find a room piled high with treasure!",  "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100);
            this.addChild(this._gameLabel2);

            this._gameLabel3 = new objects.Label("It is also guarded by a small dragon, who attacks you.",  "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80);
            this.addChild(this._gameLabel3);

            this._gameLabel4 = new objects.Label("However, it is blinded by the fire from your torch, and slithers back, hissing.",  "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 60);
            this.addChild(this._gameLabel4);

            this._gameLabel5 = new objects.Label("You grab as much treasure as you can and leave the cave.",  "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 40);
            this.addChild(this._gameLabel5);

            this._gameLabel6 = new objects.Label("This would've be the best ending, you think, if your brother came along too.",  "20px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 20);
            this.addChild(this._gameLabel6);

            // Create Start over button
            this._gameButton = new objects.Button("STARTOVER", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onButtonClick, this);

            stage.addChild(this);
        }

          public update() : void {
            // Update objects
        }
          private _onButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}