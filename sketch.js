/**
 * Alexander Burbano
 * IGME-102: Project 4, 12/9/19
 * User spawns objects with equals sign ,clears them with minus sign, and can drag them with mouse clicks
 */

"use strict"; //catch some common coding errors
let sMgr;

function preload() {
    sMgr = new spriteManager();
    sMgr.loadSpriteImages();
}
/**
 * setup :
 */

function setup() {
    createCanvas(500, 600)
    imageMode(CENTER);
    fill('purple');
    textSize(50)
        // sMgr.displayAll()
        let hero = "Nakia of the River tribe";
let result = hero.split("");
print(result)

}

/**
 * draw :
 */
function draw() {
    background('pink');
    text(sMgr.getLength(), 50, 50);
    
    if(frameCount%5==0)
    sMgr.transitionAll();

    sMgr.displayAll();
    sMgr.moveAll();
    sMgr.filterOutliers();
}

function keyTyped() {
    if (key == '=') {
        sMgr.addSprite();
    } else if (key == 'c') {
        sMgr.clearAll();
    }
}