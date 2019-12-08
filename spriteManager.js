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
        loadImage('Sprites/Black.png');
        loadImage('Sprites/Orange.png');
        loadImage('Sprites/Green.png');
        loadImage('Sprites/Red.png');
        return (this.sprites.length);
    }
    addSprite(sprite) {
        //new sprite object
        this.sprites.push(new good())
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