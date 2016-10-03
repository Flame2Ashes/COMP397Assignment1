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
        //Scene 1 decisions
        Scene.STAY = 2;
        Scene.COME = 3;
        //Scene 2A decisions
        Scene.SHOVEL = 4;
        Scene.PICKAXE = 5;
        //Scene 2B decisions
        Scene.TORCH = 6;
        Scene.LIGHT = 7;
        //Scene 3A decisions
        Scene.LEFTA = 8;
        Scene.RIGHTA = 9;
        //Scene 3B decisions
        Scene.LEFTB = 10;
        Scene.RIGHTB = 11;
        //Scene 3C decisions
        Scene.LEFTC = 12;
        Scene.RIGHTC = 13;
        //Scene 3D decisions
        Scene.LEFTD = 14;
        Scene.RIGHTD = 15;
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