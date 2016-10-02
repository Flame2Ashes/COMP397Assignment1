/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static GAME : number = 1;
        public static GAMEOVER : number = 2;
        //Scene 1 decisions
        public static STAY : number = 3;
        public static COME : number = 4;
        //Scene 2A decisions
        public static SHOVEL : number = 5;
        public static PICKAXE : number = 6;
        //Scene 2B decisions
        public static TORCH : number = 7;
        public static LIGHT : number = 8;
        //Scene 3A decisions
        public static LEFTA : number = 9;
        public static RIGHTA : number = 10;
        //Scene 3B decisions
        public static LEFTB : number = 11;
        public static RIGHTB : number = 12;
        //Scene 3C decisions
        public static LEFTC : number = 13;
        public static RIGHTC : number = 14;
        //Scene 3D decisions
        public static LEFTD : number = 15;
        public static RIGHTD : number = 16;

    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}