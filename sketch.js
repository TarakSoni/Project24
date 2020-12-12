
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(650,350,1300,20)
	
	paperObject = new Paper(160,300,40)

	binLeft = new Bin(970,290,20,100)
	binRight = new Bin(1170,290,20,100)
	binBottom = new Bin(1070,330,220,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
 ground.display();
 paperObject.display();
 binLeft.display();
 binRight.display();
 binBottom.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85});

	}
}

