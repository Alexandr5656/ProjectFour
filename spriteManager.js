class SpriteManager{
    constructor(){
        this.sprites=[]
        this.images = new Map();
        this.states = {
            fall : 0,
            left : 1,
            right : 2,
            drag : 3
        }

    }
    loadSpriteImages(){
        this.sprites.push(loadImage(Black.png));
        this.sprites.push(loadImage(Green.png));
        this.sprites.push(loadImage(Red.png));
        this.sprites.push(loadImage(Orange.png));
    }
    addSprite(){

    }
    getLength(){

    }
    clearAll(){

    }
    transitionAll(){

    }
    display(){

    }
    moveAll(){

    }
    filterOutliers(){

    }

}