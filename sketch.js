
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball,dustbin1,dustbin2,dustbin3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paper(200,650,20)
	dustbin1 = new Bucket(400,650,200,20);
	dustbin2 = new Bucket(300,600,20,100);
	dustbin3 = new Bucket(500,600,20,100);
	ground = new Ground(200,height,1600,20);
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(pos.body,pos.body.position,{x:85,y:-85})
	}
}

