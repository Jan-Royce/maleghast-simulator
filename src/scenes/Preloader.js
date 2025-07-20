export class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }
    
    init() {
        
    }
    
    preload() {
        this.load.setPath('assets/images');
        
        //tiles
        this.load.image('tiles', 'tiles/tiles1.png');
        
        //CARCASS
        this.load.image('necro_carcass', 'necro/operator.png');
        this.load.image('pt_ammogoblin', 'units/carcass/portrait/ammogoblin.png');
        this.load.image('sp_ammogoblin', 'units/carcass/sprite/ammogoblin.png');
        this.load.image('pt_barrelform', 'units/carcass/portrait/barrelform.png');
        this.load.image('sp_barrelform', 'units/carcass/sprite/barrelform.png');
        this.load.image('pt_egisweapon', 'units/carcass/portrait/egisweapon.png');
        this.load.image('sp_egisweapon', 'units/carcass/sprite/egisweapon.png');
        this.load.image('sp_enforcer', 'units/carcass/portrait/enforcer.png');
        this.load.image('pt_enforcer', 'units/carcass/sprite/enforcer.png');
        this.load.image('sp_gunwight', 'units/carcass/portrait/gunwight.png');
        this.load.image('pt_gunwight', 'units/carcass/sprite/gunwight.png');
        
        //Goregrinders
        this.load.image('necro_goregrinders', 'necro/warlord.png');
        this.load.image('pt_berserker', 'units/goregrinders/portrait/berserker.png');
        this.load.image('sp_berserker', 'units/goregrinders/sprite/berserker.png');
        this.load.image('pt_carnifex', 'units/goregrinders/portrait/carnifex.png');
        this.load.image('sp_carnifex', 'units/goregrinders/sprite/carnifex.png');
        this.load.image('pt_painghoul', 'units/goregrinders/portrait/painghoul.png');
        this.load.image('sp_painghoul', 'units/goregrinders/sprite/painghoul.png');
        this.load.image('pt_painwheel', 'units/goregrinders/portrait/painwheel.png');
        this.load.image('sp_painwheel', 'units/goregrinders/sprite/painwheel.png');
        this.load.image('pt_warhead', 'units/goregrinders/portrait/warhead.png');
        this.load.image('sp_warhead', 'units/goregrinders/sprite/warhead.png');
    }
    
    create() {
        this.scene.start('Game');
    }
}