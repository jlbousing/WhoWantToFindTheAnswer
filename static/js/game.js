export class Game extends Phaser.Scene {

    constructor() {
        super({ key: "game"});
    }

    preload(){

        this.load.image("background","images/terrain-test.png");

    }

    create(){
        this.add.image(0,0,"background");
    }
}
