class spriteManager{
    constructor(){
        this.sprites=[]
        this.images = new Map();
        this.states = {
            fall : 0,
            left : 1,
            right : 2,
            drag : 3
        };

    }
    loadSpriteImages(){
        this.sprites.push(loadImage('Sprites/Black.png'));
        this.sprites.push(loadImage('Sprites/Orange.png'));
        this.sprites.push(loadImage('Sprites/Green.png'));
        this.sprites.push(loadImage('Sprites/Red.png'));
        return(this.sprites.length);
    }
    addSprite(){
        //i have no clue
    }
    getLength(){
        return (this.sprites.length);
    }
    clearAll(){
        
            this.sprites.splice(0,this.sprites.length)
        
    }
    transitionAll(){

    }
    displayAll(){
        image(this.sprites[2],500,500)
    }
    moveAll(){

    }
    filterOutliers(){

    }

}