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
        this.images.set('F5', loadImage('Sprites/F5.png'));
        this.images.set('F6', loadImage('Sprites/F6.png'));
        this.images.set('L1', loadImage('Sprites/L1.png'));
        this.images.set('L2', loadImage('Sprites/L2.png'));
        this.images.set('L3', loadImage('Sprites/L3.png'));
        this.images.set('L4', loadImage('Sprites/L4.png'));
        this.images.set('L5', loadImage('Sprites/L5.png'));
        this.images.set('R1', loadImage('Sprites/R1.png'));
        this.images.set('R2', loadImage('Sprites/R2.png'));
        this.images.set('R3', loadImage('Sprites/R3.png'));
        this.images.set('R4', loadImage('Sprites/R4.png'));
        this.images.set('R5', loadImage('Sprites/R5.png'));
        this.images.set('D1', loadImage('Sprites/D1.png'));
        this.images.set('D2', loadImage('Sprites/D2.png'));
        this.images.set('D3', loadImage('Sprites/D3.png'));
        this.images.set('D4', loadImage('Sprites/D4.png'));
        this.images.set('D5', loadImage('Sprites/D5.png'));
        this.images.set('D6', loadImage('Sprites/D6.png'));
        this.images.set('D7', loadImage('Sprites/D7.png'));
        return (this.images.size);
    }
    //adds the sprite
    addSprite() {
        //new sprite object
        this.sprites.push(new good(this.states))
        return (this.sprites.length);
    }
    //gives back length
    getLength() {
        return (this.sprites.length);
    }
    //clears all objects
    clearAll() {

        this.sprites.splice(0, this.sprites.length)
        return(this.sprite.length)

    }
    //makes everything transition
    transitionAll() {
        this.sprites.forEach(element => {
            element.transition(this.states)

        });

    }
    //displays all the objects
    displayAll() {
        this.sprites.forEach(element => {
            element.display(this.images);
        });
    }
    //moves all the objects
    moveAll() {
        this.sprites.forEach(element => {
            element.move(this.states);

        });
    }
    //deletes anything off campus
    filterOutliers() {
       
        this.sprites = this.sprites.filter(element => {
            
            if(element.location.x>0&&element.location.x<width)
            {
                
                return true
            }
            else{
                
                return false
            }
        });
    }

}