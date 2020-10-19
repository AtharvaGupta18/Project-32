class LaunchingCircle {
    constructor(){
        var options ={
            isStatic: false,
            restitution: 1,
            density: 0.8,
            
        }
        this.body = Bodies.circle(100, 400, 15, options);
        this.radius = 15;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(255, 0, 165);
        ellipse(pos.x, pos.y, this.radius);
    }
}