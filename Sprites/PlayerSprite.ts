interface iBombManager {
    bombManager: BombManager;
}

class PlayerSprite extends BaseSprite implements iBombManager {
    public throwLength: number = 2;
    public fuseTime: number = 2000;
    public bombCount: number = 1;

    public bombManager: BombManager;

    constructor(playerImage: Image) {
        super(playerImage, SpriteKind.Player);
        this.createSprite();
        this.bombManager = new BombManager();
        this.registerControlls();
    }

    private placeBomb(): void {
        if (this.bombManager.bombs.length > this.bombCount - 1) {
            return
        }

        let bomb = new BombSprite(assets.image`bomb`, this.bombManager, BombTypes.C4);
        this.bombManager.bombs.push(bomb)
        tiles.placeOnTile(bomb.sprite, this.sprite.tilemapLocation())
        bomb.sprite.lifespan = this.fuseTime;
        timer.after(this.fuseTime, function () {
            bomb.blowUp();
        });
    }

    private throwBomb(): void {
        if (this.bombManager.bombs.length > this.bombCount - 1) {
            return;
        }

        if (this.sprite.vx == 0 && this.sprite.vy == 0) {
            this.placeBomb();
            return;
        }

        let bomb = new BombSprite(assets.image`bomb`, this.bombManager, BombTypes.C4);
        this.bombManager.bombs.push(bomb);
        bomb.sprite.setPosition(this.sprite.x, this.sprite.y);
        bomb.sprite.setVelocity(this.sprite.vx * 2, this.sprite.vy * 2);
        while (spriteutils.distanceBetween(this.sprite, bomb.sprite) < this.throwLength * 16) {
            pause(100);
        }
        bomb.sprite.setVelocity(0, 0);
        bomb.sprite.lifespan = this.fuseTime;
        timer.after(this.fuseTime, function () {
            bomb.blowUp();
        });
    }

    private registerControlls(): void {
        controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
            this.throwBomb();
        });

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            this.placeBomb();
        })
    }
 
}