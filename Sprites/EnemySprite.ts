class EnemySprite extends BaseSprite {
    public ghostSpeed: number = 30;

    constructor(enemyImage: Image) {
        super(enemyImage, SpriteKind.Enemy);
        this.createSprite();
        this.sprite.data = this;
    }

    public handleGhostMovement() {
        let yVel: number;
        let xVel: number;
        if (this.sprite.vx != 0) {
            yVel = randint(0, 1) * this.ghostSpeed * 2 - this.ghostSpeed
            this.sprite.setVelocity(0, yVel)
        } else {
            xVel = randint(0, 1) * this.ghostSpeed * 2 - this.ghostSpeed
            this.sprite.setVelocity(xVel, 0)
        }
    }

    public ghostBehaviour(dino: Sprite) {
        let ghostPos: tiles.Location;
        let startCol: number;
        let startRow: number;
        let path: tiles.Location[];
        if (spriteutils.distanceBetween(this.sprite, dino) < 80) {
            ghostPos = this.sprite.tilemapLocation()
            startCol = sprites.readDataNumber(this.sprite, "start_col")
            startRow = sprites.readDataNumber(this.sprite, "start_row")
            if (ghostPos.col == startCol && ghostPos.row == startRow) {
                return
            }

            sprites.setDataNumber(this.sprite, "start_col", ghostPos.col)
            sprites.setDataNumber(this.sprite, "start_row", ghostPos.row)
            path = scene.aStar(ghostPos, dino.tilemapLocation())
            scene.followPath(this.sprite, path, this.ghostSpeed)
        } else if (this.sprite.vx == 0 && this.sprite.vy == 0) {
            this.handleGhostMovement()
        }
    }
}