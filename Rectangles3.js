class Rect3 {
    constructor(x, y, color, a, b, c){

        var options ={
             // isStatic: true,
             restitution: 0.8,
             // density: 0.8
        }

        this.image = loadImage("Images/pink.png")
        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.visibility = 255;

        World.add(world, this.body);

    }
    
    score(){

        if (this.visibility < 0 && this.visibility >= 105) {
            score+1;
        }

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
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y);
            pop();
            
        }
        
	    rect13.score();
	    rect14.score();
	    rect15.score();

    }
}       
                