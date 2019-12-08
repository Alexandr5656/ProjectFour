class good {
    constructor() {
        this.radius = 25;
        this.speed = random(.5, 4);
        this.location = createVector(random(width), 0);
        this.state = states.fall;
        this.stateIndex = 0;
        this.stateImages = [
            [f1, f2, f3, f4],
            [l1, l2, l3, l4],
            [r1, r2, r3, r4],
            [d1, d2, d3, d4]
        ];
    }
    isWithin(location) {
        if ((location.x < (this.location.x + this.radius) && (this.location.x + this.radius) > location.x) && (location.y < (this.location.y + this.radius) && (this.location.y + this.radius) > location.y)) {
            return true;
        } else {
            return false;
        }
    }
    updateIndex() {
        if (this.state)
    }
    display(img) {
        let locals = this.stateImages[this.state][this.stateIndex];
        image(locals, img.get())
        return (locals)


    }
    transition() {
        mice = createVector(mouseX, mouseY);
        if (this.isWithin(mice)) {
            states.drag
        } else if (this.location.y < 0 + this.radius) {
            states.fall
        }
        if (this.state == states.fall || this.state == states.drag) {
            let test = random(0, 1)
            if (test > .5) {
                states.right
            } else {
                states.left
            }
        }
        this.updateIndex();
        return (this.state && this.stateIndex)

    }
    move() {

    }


}