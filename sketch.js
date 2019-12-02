/**
 * Yourfirstand Lastname
 * IGME-102: Assignment Name, m/d/19
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
let sMgr;
function preload(){
    sMgr = new spriteManager();
    sMgr.loadSpriteImages();
}
/**
 * setup :
 */

function setup() {
    createCanvas(2000, 1000)
    sMgr.displayAll()
}

/**
 * draw :
 */
function draw() {
    
}

