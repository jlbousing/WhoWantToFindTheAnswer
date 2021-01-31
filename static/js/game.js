export class Game extends Phaser.Scene {

    constructor() {
        super({ key: "game"});
    }

    preload(){

        this.load.image("background","images/terrain-test.png");
        this.load.image("gameover","images/gameover-test.png");
        this.load.image("cofre","images/cofre-test.png");
        //this.load.image("player","images/finder-pj-test-1.png");
        this.load.spritesheet("player","animations/finder-pj-run.png",{
            frameWidth: 120,
            frameHeight: 100
        });
    }

    create(){

    
        //this.physics.world.setBoundsCollision(true,true,true,true); //NO CHOCA CON LOS BORDES

        this.add.image(400,250,"background");
        this.gameoverImage = this.add.image(400,90,"gameover");
        this.gameoverImage.visible = false;

        this.cofre = this.physics.add.image(100,30,"cofre").setImmovable( );

       // this.player = this.physics.add.image(200,100,"player");
        //this.player.setCollideWorldBounds(true);

        //this.player = this.add.sprite(200,100,"player");
        this.player = this.physics.add.sprite(200,100,"player");
        this.animationPlayer = this.anims.create({
            key: "pj-walk",
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 10,
            repeat: -1 //infinite loops
        });

        //this.player.play("pj-walk");
    

        this.physics.add.collider(this.player,this.cofre);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.velocity = 100;
    }

    update(){


        if (this.cursors.left.isDown){
            this.player.setVelocityX(this.velocity * -1);
            this.player.anims.play("pj-walk",true);
        }
        else if (this.cursors.right.isDown){
            this.player.setVelocityX(this.velocity);
            this.player.anims.play("pj-walk",true);
        }
        else if (this.cursors.up.isDown){
            this.player.setVelocityY(this.velocity * -1);
            this.player.anims.play("pj-walk",true);
        }
        else if (this.cursors.down.isDown){
            this.player.setVelocityY(this.velocity);
            this.player.anims.play("pj-walk",true);
        }else{
            this.player.setVelocity(0,0);
            this.player.anims.stop();
        }
    }
}
