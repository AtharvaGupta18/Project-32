class Paper {
    constructor(){
        var options ={
            isStatic: false,
            restitution: 0.3,
            frictionAir: 0.5,
            density: 1.0,
            
        }
        this.body = Bodies.circle(100, 300, 10, options);
        this.radius = 10;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 30, 30);
    }
}