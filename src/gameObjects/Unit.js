export class Unit extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y)
    {
        super(scene, x, y, 'necro_carcass');
        
        scene.add.existing(this);
        
        this.setOrigin(0, 0);
        this.setDisplaySize(64, 64);
        
        this.setInteractive({ draggable: true });
        this.on('drag', (pointer, x, y) => {
            x = Phaser.Math.Snap.To(x, 64);
            y = Phaser.Math.Snap.To(y, 64);
            this.x = x;
            this.y = y;
        });
        
        this.on('pointerup', (pointer, x, y) => {
            if(pointer.rightButtonReleased()) {
                this.createPopupMenu(scene, x, y);
            }
        });
    }
    
    // TODO
    createPopupMenu(scene, x, y)
    {
        const menu = scene.add.container(x, y);
        const background = scene.add.rectangle(x, y, 150, 120, 0x222222).setOrigin(0);
        background.setStrokeStyle(2, 0xffffff);
        
        const option1 = scene.add.text(x+10, y+10, 'Option 1', { fontSize: '20px', fill: '#fff' }).setInteractive();
        const option2 = scene.add.text(x+10, y+50, 'Option 2', { fontSize: '20px', fill: '#fff' }).setInteractive();
        const closeBtn = scene.add.text(x+10, y+90, 'Close', { fontSize: '20px', fill: '#f00' }).setInteractive();
        
        menu.add([background, option1, option2, closeBtn]);
        
        closeBtn.on('pointerdown', () => {
            menu.setVisible(false);
        });

        option1.on('pointerdown', () => {
            console.log('Option 1 selected');
            menu.setVisible(false);
        });

        option2.on('pointerdown', () => {
            console.log('Option 2 selected');
            menu.setVisible(false);
        });
    }
}