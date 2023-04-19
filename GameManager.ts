namespace SpriteKind {
    export const Bomb: any = SpriteKind.create();
}

class GameManager {
    // configurable game state
    public level: number = 0;

    private dino: PlayerSprite;
    private tileMap: TilemapManager;
    private tileMapLevels: tiles.TileMapData[];

    constructor(tilemapsToLoad: tiles.TileMapData[]) {
        this.tileMapLevels = tilemapsToLoad;
        this.onUpdateIntervals();
        this.createPlayerSprite();
        this.setupScene();
        this.onUpdate();  
        this.onOverlaps();
        this.setupWallBounce();
        this.levelManager();
    }

    private createPlayerSprite(): void {
        this.dino = new PlayerSprite(assets.image`dino`);
        controller.moveSprite(this.dino.sprite);
        scene.cameraFollowSprite(this.dino.sprite);
        this.dino.sprite.setScale(0.75, ScaleAnchor.Middle);
    }

    private setupScene(): void {
        // info.setScore(0)
        this.tileMap = new TilemapManager(this.tileMapLevels[this.level], 9, this.dino);
        this.tileMap.buildLevel();
    }
    
    private onOverlaps(): void {
        sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (ghost: Sprite, bomb: Sprite) {
            bomb.data.bombManager.bombKills += 1;
            info.changeScoreBy(bomb.data.bombManager.bombKills);
            
            // Week one hack removed
            // if (sprites.allOfKind(SpriteKind.Enemy).length < 1){
            //     game.over(true);
            // }
            
            ghost.destroy()
            pause(500);
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
            game.over(false);
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite: Sprite, otherSprite: Sprite) {
            game.over(false);
        })
    }

    private onUpdateIntervals(): void {
        // Update intervals go here
    }
    
    private setupWallBounce(): void {
        scene.onHitWall(SpriteKind.Enemy, function (sprite: Sprite, location: tiles.Location) {
            sprite.data.handleGhostMovement();
        })
    }

    private onUpdate(): void {
        // Hack Week 2
        game.onUpdate(function tick(): void {
            for (let ghost of sprites.allOfKind(SpriteKind.Enemy)) {
                ghost.data.ghostBehaviour(this.dino.sprite);
            }
        })
    }

    // Hack Week 1 New Level 
    private setupNewLevel(): void {
        this.level += 1;
        this.tileMap = new TilemapManager(this.tileMapLevels[this.level], 9, this.dino);
        this.tileMap.buildLevel();
    }

    private levelManager(): void {
        scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function () {
            if (sprites.allOfKind(SpriteKind.Enemy).length < 1) {
                this.setupNewLevel();
            }
        })
    }
}