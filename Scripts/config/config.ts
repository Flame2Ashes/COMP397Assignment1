/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static GAME : number = 1;
        //Scene 1 decisions
        public static STAY : number = 2;
        public static COME : number = 3;
        //Scene 2A decisions
        public static SHOVEL : number = 4;
        public static PICKAXE : number = 5;
        //Scene 2B decisions
        public static TORCH : number = 6;
        public static LIGHT : number = 7;
        //Scene 3A decisions
        public static LEFTA : number = 8;
        public static RIGHTA : number = 9;
        //Scene 3B decisions
        public static LEFTB : number = 10;
        public static RIGHTB : number = 11;
        //Scene 3C decisions
        public static LEFTC : number = 12;
        public static RIGHTC : number = 13;
        //Scene 3D decisions
        public static LEFTD : number = 14;
        public static RIGHTD : number = 15;

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