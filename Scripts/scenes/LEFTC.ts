//Decision Tree: STAY > LIGHT TORCH > GO LEFT

module scenes {
    export class LEFTC extends objects.Scene {
        //PRIVATE VARIABLES
        private _gameLabel : objects.Label; //Text
        private _gameButton : objects.Button; //Button
        private _gamebg : createjs.Bitmap; //Background

        constructor() {
            super();
        }

        //PUBLIC FUNCTIONS
        public start() : void {
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