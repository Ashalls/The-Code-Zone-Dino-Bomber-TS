class BombManager {
    public bombs: BombSprite[];
    public bombKills: number = 0;

    constructor(){
        this.bombs = [];
    }
}

enum BombTypes {
    C4 = 1,
    Sticky = 2,
    DepthCharge = 3,
    TNT = 4,
}

class ExplosionSprite extends BaseSprite {
    public bombManager: BombManager;

    constructor(bombManager: BombManager) {
        super(assets.image`bomb`, SpriteKind.Projectile);
        this.bombManager = bombManager;
    }

    public spawnExplosion(tile: any): void {
        this.createSprite();
        this.sprite.data = this;
        tiles.placeOnTile(this.sprite, tile);
        let frameLen = 100;
        let animLen = assets.animation`explosion`.length;
        this.sprite.lifespan = frameLen * animLen;
        animation.runImageAnimation(this.sprite, assets.animation`explosion`, frameLen, false)
    }
}

class BombSprite extends BaseSprite {
    public bombRange: number = 1;
    public bombManager: BombManager;
    
    private bombType: BombTypes;

    constructor(assetImage: Image, bombManager: BombManager, bombType: BombTypes) {
        super(assetImage, SpriteKind.Bomb);
        this.bombManager = bombManager;
        this.bombType = bombType;
        this.createSprite();
    }

    public blowUp(): void {
        let bomb = this.bombManager.bombs.shift()
        for (let tile of tilesAdvanced.getAdjacentTiles(bomb.sprite.tilemapLocation(), this.bombRange + this.bombType)) {
            if (tiles.tileAtLocationEquals(tile, assets.tile`wall`)) {
                continue
            }

            new ExplosionSprite(this.bombManager).spawnExplosion(tile);
            if (tiles.tileAtLocationEquals(tile, assets.tile`bricks`)) {
                this.destroyBricks(tile)
            }
        }
    }

    private destroyBricks(tile: any): void {
        tiles.setTileAt(tile, assets.tile`empty`)
        tiles.setWallAt(tile, false)
    }
}