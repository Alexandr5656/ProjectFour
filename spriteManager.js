class spriteManager {
    constructor() {
        this.sprites = []
        this.images = new Map();
        this.states = {
            fall: 0,
            left: 1,
            right: 2,
            drag: 3
        };

    }
    loadSpriteImages() {
        this.images.set('F1', loadImage('Sprites/F1.png'));
        this.images.set('F2', loadImage('Sprites/F2.png'));
        this.images.set('F3', loadImage('Sprites/F3.png'));
        this.images.set('F4', loadImage('Sprites/F4.png'));
        this.images.set('L1', loadImage('Sprites/L1.png'));
        this.images.set('L2', loadImage('Sprites/L2.png'));
        this.images.set('L3', loadImage('Sprites/L3.png'));
        this.images.set('L4', loadImage('Sprites/L4.png'));
        this.images.set('R1', loadImage('Sprites/R1.png'));
        this.images.set('R2', loadImage('Sprites/R2.png'));
        this.images.set('R3', loadImage('Sprites/R3.png'));
        this.images.set('R4', loadImage('Sprites/R4.png'));
        this.images.set('D1', loadImage('Sprites/D1.png'));
        this.images.set('D2', loadImage('Sprites/D2.png'));
        this.images.set('D3', loadImage('Sprites/D3.png'));
        this.images.set('D4', loadImage('Sprites/D4.png'));
        return (this.images.size);
    }
    addSprite(sprite) {
        //new sprite object
        this.sprites.push(new good(this.states))
        return (this.sprites.length);
    }
    getLength() {
        return (this.sprites.length);
    }
    clearAll() {

        this.sprites.splice(0, this.sprites.length)

    }
    transitionAll() {
        this.sprites.forEach(element => {
            element.transition(this.states)

        });

    }
    displayAll() {
        this.sprites.forEach(element => {
            element.display(this.images);
        });
    }
    moveAll() {
        this.sprites.forEach(element => {
            element.move(this.states);

        });
    }
    filterOutliers() {

    }

}