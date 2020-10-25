class Rect1 {
    constructor(x, y, color, a, b, c){

        var options ={
             // isStatic: true,
             restitution: 0.8,
             // density: 0.8
        }

        this.image = loadImage("Images/blue.png")
        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.visiblity = 255;

        World.add(world, this.body);

    }
    display(){

        if(this.body.speed < 4){

            var pos = this.body.position;
            imageMode(CENTER);
            strokeWeight(2);
            stroke(this.a, this.b, this.c)
            fill(this.color);
            image(this.image, pos.x, pos.y);
            
        }
        else{

            World.remove(world, this.body);
            push();
            this.visiblity = this.visiblity - 5;
            tint(255, this.visiblity);
            image(this.image, this.body.position.x, this.body.position.y);
            pop();
            
        }
                

        // var pos = this.body.position;
        // rectMode(CENTER);
        // strokeWeight(2);
        // stroke(this.a, this.b, this.c)
        // fill(this.color);
        // rect(pos.x, pos.y, 30, 50);
        
    }
}