
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1=new bob(800-80,400,60);
	bob2=new bob(800-40,400,60);
	bob3=new bob(800,400,60);
	bob4=new bob(800+40,400,60);
	bob5=new bob(800+80,400,60);

	roof = new Roof(width/2,height/4,width/7,20);
	

	rope1 = new rope(bob1.body,roof.body,-60*2,0);
	rope2 = new rope(bob2.body,roof.body,-60,0);
	rope3 = new rope(bob3.body,roof.body,0,0);
	rope4 = new rope(bob4.body,roof.body,60,0);
	rope5 = new rope(bob5.body,roof.body,60*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  fill("white");
  bob1.display();
  fill("red");
  bob2.display();
  fill("green");
  bob3.display();
  fill("blue");
  bob4.display();
  fill("yellow");
  bob5.display();


  //roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}


