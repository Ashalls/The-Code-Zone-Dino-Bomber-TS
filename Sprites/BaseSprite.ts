abstract class BaseSprite {
    public sprite: Sprite;
    private spriteImage: Image;
    public spriteKind: any;

    constructor(spriteImage: Image, spriteKind: any) {
        this.spriteImage = spriteImage;
        this.spriteKind = spriteKind;
    }

    public createSprite(): void {
        this.sprite = sprites.create(this.spriteImage, this.spriteKind);
    }
}