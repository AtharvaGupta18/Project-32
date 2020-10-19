class Rect {
    constructor(x, y, color, a, b, c){
        var options ={
            // isStatic: true,
            restitution: 0.8,
            // density: 0.8
        }
        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;

        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(2);
        stroke(this.a, this.b, this.c)
        fill(this.color);
        rect(pos.x, pos.y, 30, 50);
        
    }
}