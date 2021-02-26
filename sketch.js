
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 

	//Create the Bodies Here.
	paper = new paper(100,100,1); 
dustbin1 = new dustbin(600,100,20,70); 
dustbin2 = new dustbin(610,100,60,20); 
dustbin3 = new dustbin(600,100,20,70); 

	Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin.display(); 
  drawSprites();
 
}



