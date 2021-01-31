import { Game } from "./game.js";
import { ModalQuestion } from "./modalquestion.js"
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Game, ModalQuestion],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

var game = new Phaser.Game(config);
