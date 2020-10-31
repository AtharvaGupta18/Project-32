const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg = 0;

var score = 0;
var text1;
var text2;

var rect1, rect2, rect3, rect4, rect5,
 	rect6, rect7, rect8, rect9, rect10, 
	rect11, rect12, rect13, rect14, 
	rect15, rect16;

function preload(){

	getBackgroundImg();

}
function setup() {
	createCanvas(850, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(430, 590, 900, 20, "brown");
	g1 = new Ground(0, 300, 1, 600, "white");
	g2 = new Ground(850, 300, 1, 600, "white");
	g3 = new Ground(425, 0, 850, 1, "white")

	launcher = new LaunchingCircle();

	chain = new Chain(launcher.body, {x: 150, y: 350});
	platform = new Ground(500, 400, 250, 10, "green");

	rect1 = new Rect1(470, 390, "lightblue");
	rect2 = new Rect1(440, 390, "lightblue");
	rect3 = new Rect1(410, 390, "lightblue");
	rect4 = new Rect1(500, 390, "lightblue");
	rect5 = new Rect1(530, 390, "lightblue");
	rect6 = new Rect1(560, 390, "lightblue");
	rect7 = new Rect1(590, 390, "lightblue");
	
	rect8 = new Rect2(440, 340, "lightgreen");
	rect9 = new Rect2(560, 340, "lightgreen");
	rect10 = new Rect2(470, 340, "lightgreen");
	rect11 = new Rect2(500, 340, "lightgreen");
	rect12 = new Rect2(530, 340, "lightgreen");

	rect13 = new Rect3(470, 290, "pink");
	rect14 = new Rect3(500, 290, "pink");
	rect15 = new Rect3(530, 290, "pink");

	rect16 = new Rect4(500, 240, "grey");

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
	background(backgroundImg);

	ground.display();
	g1.display();
	g2.display();
	launcher.display();
	chain.display();
	platform.display();

	rect1.display();
	rect2.display();
	rect3.display();
	rect4.display();
	rect5.display();
	rect6.display();
	rect7.display();

	rect8.display();
	rect9.display();
	rect10.display();
	rect11.display();
	rect12.display();

	rect13.display();
	rect14.display();
	rect15.display();

	rect16.display();

	text("Press space key to get a new chance!!!", 600, 550);
	text(" Score : "+score, 20, 50);

}

function mouseDragged(){
    Matter.Body.setPosition(launcher.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(launcher.body, {x: 50, y: 370});
		chain = new Chain(launcher.body, {x: 150, y: 350});
		

	}

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
    var responseJSON = await response.json(); 
    var datetime = responseJSON.datetime; 
    var hour = datetime.slice(11,13);

    if(hour >= 05 && hour < 08){

        bg = "Images/Sunrise.png"; 

    } 

    else if(hour >= 08 && hour < 17) {
		
		bg = "Images/Afternoon.png";

	}
	
	else if(hour >= 17 && hour < 20){

		bg = "Images/Evening.png";

	}

	else if(hour >= 20 && hour < 05){

		bg = "Images/Night.png";

	}
		
	
		backgroundImg = loadImage(bg); 
}