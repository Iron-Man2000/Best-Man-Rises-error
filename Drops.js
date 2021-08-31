class Drops {
    constructor(x, y) {
        var options = {
            friction: 0.1,
            density: 0.3,
        }

        this.drop = Bodies.circle(x, y, 10);
        this.x = x;
        this.y = y;

        World.add(world, this.drop);
        update() {
            if(pos.y > height) {
                Matter.Body.setPosition(this.rain, {x: random(0, 400), y: random(0, 400)})
            }
        }

        display() {
            var pos = this.drop.position;
            circle(pos.x, pos.y, 10);
        }
    }
}