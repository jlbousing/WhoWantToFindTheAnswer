import { questions } from "./questions";

export class ModalQuestion extends Phaser.Scene {


    constructor(question,answer){
        super({key: "ModalQuestion"});
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }


    create(){

        this.add.text(200,200,this.question,{
            fontSize: 24,
            color: "#fff",
            fontFamily: "Arial",
            backgroundColor: "#000"
        });

        this.add.text(200,200,`Answer: ${this.answer}, is correct or not ?`,{
            fontSize: 24,
            color: "#fff",
            fontFamily: "Arial",
            backgroundColor: "#000"
        });

        const yesButton = this.add.text(100, 100, 'YES!', { fill: '#0f0' });
        yesButton.setInteractive();

        yesButton.on('pointerover', () => { console.log('CLICK YES'); });


        const noButton = this.add.text(100, 100, 'YES!', { fill: '#0f0' });
        noButton.setInteractive();

        noButton.on('pointerover', () => { console.log('CLICK NO'); });
    }


}