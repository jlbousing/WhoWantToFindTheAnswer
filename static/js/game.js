
import { questions } from "./questions.js";

export class Game extends Phaser.Scene {

    constructor() {
        super({ key: "game"});
    }

    preload(){

        this.load.image("background","images/terrain-test.png");
        this.load.image("gameover","images/gameover-test.png");
        //this.load.image("cofre","images/cofre-test.png");
        this.load.spritesheet("cofre","animations/cofre-test-animation.png",{
            frameWidth: 130,
            frameHeight: 128
        });
        //this.load.image("player","images/finder-pj-test-1.png");
        this.load.spritesheet("player","animations/finder-pj-run.png",{
            frameWidth: 120,
            frameHeight: 100
        });

        this.load.spritesheet("enemy","animations/lier-animation.png",{
            frameWidth: 120,
            frameHeight: 100
        });

        this.load.spritesheet("fuego","animations/fuego-animation.png",{
            frameWidth: 120,
            frameHeight: 100
        });
    }


    createPlayer(){
        

        this.player = this.physics.add.sprite(200,100,"player");
        this.animationPlayer = this.anims.create({
            key: "pj-walk",
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 10,
            repeat: -1 //infinite loops
        });
    }

    createQuestion(){

        let index = Phaser.Math.Between(0,3);
        console.log(index);

        this.question = questions[index];
    }

    createCofre(){

        this.createQuestion();

        console.log("probando questions ",questions);

        /*
        this.cofre = this.physics.add.sprite(300,200,"cofre").setImmovable();
        this.animationCofre = this.anims.create({
            key: "cofre-idle",
            frames: this.anims.generateFrameNumbers('cofre'),
            frameRate: 2,
            repeat: -1 //infinite loops
        });

        this.cofre.anims.play("cofre-idle",true); */

        for(let i = 0; i < this.question.number; i++){

            console.log("hablame");
            let worldX = Phaser.Math.Between(0,750);
            let worldY = Phaser.Math.Between(0,450);

            this.cofre = this.physics.add.sprite(worldX,worldY,"cofre").setImmovable();
            this.animationCofre = this.anims.create({
            key: "cofre-idle",
            frames: this.anims.generateFrameNumbers('cofre'),
            frameRate: 2,
            repeat: -1 //infinite loops
        });

        this.cofre.anims.play("cofre-idle",true);


        }
    }

    createFuego(){

        this.fuego = this.physics.add.sprite(500,200,"fuego").setImmovable();
        this.animationCofre = this.anims.create({
            key: "fuego",
            frames: this.anims.generateFrameNumbers('fuego'),
            frameRate: 2,
            repeat: -1 //infinite loops
        });

        this.fuego.anims.play("fuego",true);
    }

    createEnemy(){

        this.enemy = this.physics.add.sprite(400,400,"enemy");
        this.animationPlayer = this.anims.create({
            key: "lier-walk",
            frames: this.anims.generateFrameNumbers('enemy'),
            frameRate: 10,
            repeat: -1 //infinite loops
        });

        this.enemy.anims.play("lier-walk",true);
    }

    
    create(){

        
        this.add.image(400,250,"background");
        this.gameoverImage = this.add.image(400,90,"gameover");
        this.gameoverImage.visible = false;

        //this.cofre = this.physics.add.image(300,200,"cofre").setImmovable( );
       // this.player = this.physics.add.image(200,100,"player");
       //this.player = this.add.sprite(200,100,"player");

        
       this.createPlayer();
       this.createCofre();
       this.createFuego();
       this.createEnemy();

       this.player.setCollideWorldBounds(true);
       this.physics.add.collider(this.player,this.cofre);
       this.physics.add.collider(this.player,this.enemy);
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
