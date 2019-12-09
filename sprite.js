class good {
    constructor(states) {
        this.radius = 25;
        this.speed = random(.5, 4);
        this.location = createVector(random(width), 0);
        this.state = states.fall;
        this.stateIndex = 0;
        this.stateImages = [
            ['F1', 'F2', 'F3', 'F4','F5','F6'],
            ['L1', 'L2', 'L3', 'L4','L5'],
            ['R1', 'R2', 'R3', 'R4','R5'],
            ['D1', 'D2', 'D3', 'D4','D5','D6','D7']
        ];
    }
    //Checks if a vector is within the radius
    isWithin(location) {
        if (location.dist(this.location) < this.radius) {
            return true;
        } else {
            return false;
        }
    }
    //Updates image
    updateIndex() {
        if (this.stateIndex >= this.stateImages[this.state].length - 1) {
            this.stateIndex = 0;
        } else {
            this.stateIndex += 1;
        }
    }
    //Displays image
    display(img) {
        let locals = this.stateImages[this.state][this.stateIndex];
        image(img.get(locals), this.location.x, this.location.y)
        return (locals)


    }
    //switches stages depending on whats happening
    transition(states) {
        let mice = createVector(mouseX, mouseY);
        if (this.isWithin(mice) && mouseIsPressed) {
            this.state = states.drag
        } else if (this.location.y < (height - this.radius)) {
            this.state = states.fall
        } else if (this.state == states.fall || this.state == states.drag) {
            let test = random(0, 1)
            if (test > .5) {
                this.state = states.right
            } else {
                this.state = states.left
            }
        }
        this.updateIndex();
        return [this.state, this.stateIndex]

    }
    //makes the sprite move
    move() {
        let fall = createVector(0, this.speed)
        let drag = createVector(mouseX, mouseY);
        let horizontal = createVector(this.speed, 0)
        drag.sub(this.location)
        drag.limit(1)
       
        switch (this.state) {
            case 0:
                this.location.add(fall)
                break;
            case 1:
                this.location.sub(horizontal)
                break;
            case 2:
                this.location.add(horizontal)
                break;
            case 3:
                this.location.add(drag)
                print(this.location)
                break;


        }
    }


}