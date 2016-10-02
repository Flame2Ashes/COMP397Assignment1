/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.GAME = 1;
        Scene.GAMEOVER = 2;
        //Scene 1 decisions
        Scene.STAY = 3;
        Scene.COME = 4;
        //Scene 2A decisions
        Scene.SHOVEL = 5;
        Scene.PICKAXE = 6;
        //Scene 2B decisions
        Scene.TORCH = 7;
        Scene.LIGHT = 8;
        //Scene 3A decisions
        Scene.LEFTA = 9;
        Scene.RIGHTA = 10;
        //Scene 3B decisions
        Scene.LEFTB = 11;
        Scene.RIGHTB = 12;
        //Scene 3C decisions
        Scene.LEFTC = 13;
        Scene.RIGHTC = 14;
        //Scene 3D decisions
        Scene.LEFTD = 15;
        Scene.RIGHTD = 16;
        return Scene;
    })();
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map