class TilemapManager {
    public tileMap: tiles.TileMapData;
    public backgroundColour: number;
    public player: PlayerSprite;

    constructor(tileMap: tiles.TileMapData, backgroundColour: number, player: PlayerSprite) {
        this.tileMap = tileMap;
        this.backgroundColour = backgroundColour;
        this.player = player;
    }

    private placeBricks(): void {
        let playerSpawn = tiles.getTilesByType(assets.tile`player spawn`)[0]
        let adjacentTiles = tilesAdvanced.getAdjacentTiles(playerSpawn, 2)
        for (let tile of tiles.getTilesByType(assets.tile`empty`)) {
            if (tilesAdvanced.tileIsInList(tile, adjacentTiles)) {
                continue
            }

            if (randint(1, 10) == 1) {
                tiles.setTileAt(tile, assets.tile`bricks`)
                tiles.setWallAt(tile, true)
            }
        }
    }

    private placeSprites(): void {
        let ghost: EnemySprite;
        for (let enemy_tile of tiles.getTilesByType(assets.tile`ghost spawn`)) {
            ghost = new EnemySprite(assets.image`ghost`);
            tiles.placeOnTile(ghost.sprite, enemy_tile)
            tiles.setTileAt(enemy_tile, assets.tile`empty`)
            ghost.handleGhostMovement();
        }
        tiles.placeOnRandomTile(this.player.sprite, assets.tile`player spawn`);
        tiles.setTileAt(this.player.sprite.tilemapLocation(), assets.tile`empty`);
    }

    public buildLevel(): void {
        tiles.setCurrentTilemap(this.tileMap)
        scene.setBackgroundColor(this.backgroundColour);
        this.placeBricks();
        this.placeSprites();
    }
}