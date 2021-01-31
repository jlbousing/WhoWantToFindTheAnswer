export class Game extends Phaser.Scene {

    constructor() {
        super({ key: "game"});
    }

    preload(){

        this.load.image("background","images/terrain-test.png");
        this.load.image("gameover","images/gameover-test.png");
        this.load.image("cofre","images/cofre-test.png");
        this.load.image("player","images/finder-pj-test-1.png");

    }

    create(){
        this.add.image(400,250,"background");
        this.gameoverImage = this.add.image(400,90,"gameover");
        this.gameoverImage.visible = false;

        this.cofreImage = this.physics.add.image(40,30,"cofre");

        this.playerImage = this.physics.add.image(200,100,"player");

    }
}
