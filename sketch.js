/**
 * Yourfirstand Lastname
 * IGME-102: Assignment Name, m/d/19
 * Summarization of sketch activity
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
    createCanvas(2000, 1000)
    imageMode(CENTER);
    fill('purple');
    textSize(50)
    sMgr.displayAll()
}

/**
 * draw :
 */
function draw() {
    background('pink');
    text(sMgr.getLength(), 50, 50);
    sMgr.transitionAll();
    sMgr.displayAll();
    sMgr.moveAll();
}

function keyTyped() {
    if (key == '=') {
        sMgr.addSprite();
    } else if (key == 'c') {
        sMgr.clearAll();
    }
}