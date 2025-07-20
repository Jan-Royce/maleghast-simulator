import { Unit } from '../gameObjects/Unit.js';
// import { Map } from '../gameObjects/Map.js';

export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    
    create() {
        this.game.canvas.oncontextmenu = (e) => e.preventDefault();
        
        const map = this.make.tilemap({
            tileWidth: 16,
            tileHeight: 16,
            width: 8,
            height: 8
        });
        
        const mapScale = 4;
        const tiles = map.addTilesetImage('tiles');
        const layer = map.createBlankLayer('layer', tiles);
        layer.randomize(0, 0, map.width, map.height, [166,167,164]);
        layer.setAlpha(0.5);
        layer.setScale(mapScale);
        layer.setOrigin(0.5);
        const gameWidth = this.cameras.main.width / 2;
        const gameHeight = this.cameras.main.height / 2;
        const mapWidth = map.widthInPixels * mapScale / 2;
        const mapHeight = map.heightInPixels * mapScale / 2;
        const offsetX = gameWidth - mapWidth;
        const offsetY = gameHeight - mapHeight;
        layer.setPosition(offsetX, offsetY);
        
        const testUnit = new Unit(this, gameWidth, gameHeight);
    }
    
    update() {
        
    }
}