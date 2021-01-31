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

    
        //this.physics.world.setBoundsCollision(true,true,true,true); //NO CHOCA CON LOS BORDES

        this.add.image(400,250,"background");
        this.gameoverImage = this.add.image(400,90,"gameover");
        this.gameoverImage.visible = false;

        this.cofre = this.physics.add.image(100,30,"cofre").setImmovable( );

        this.player = this.physics.add.image(200,100,"player");
        this.player.setCollideWorldBounds(true);
        
        this.physics.add.collider(this.player,this.cofre);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.velocity = 100;
    }

    update(){


        if (this.cursors.left.isDown){
            this.player.setVelocityX(this.velocity * -1);
        }
        else if (this.cursors.right.isDown){
            this.player.setVelocityX(this.velocity);
        }
        else if (this.cursors.up.isDown){
            this.player.setVelocityY(this.velocity * -1);
        }
        else if (this.cursors.down.isDown){
            this.player.setVelocityY(this.velocity);
        }else{
            this.player.setVelocity(0,0);
        }
    }
}
