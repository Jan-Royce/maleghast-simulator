import Phaser from 'phaser';

import { Boot } from './scenes/Boot.js';
import { Game } from './scenes/Game.js';
import { Preloader } from './scenes/Preloader.js';

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1024,
    parent: 'game-container',
    backgroundColor: '#492727',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 500 }
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        Game
    ]
};

new Phaser.Game(config);
