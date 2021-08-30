
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var bucket1;
var bucket2;
var bucket3;

function preload()
{
	
}

function setup() {
	createCanvas(950, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	  }
	ball= Bodies.ellipse(ball.position.x,ball.position.y,30);

	World.add(world,ball);
	//Create the Bodies Here.
	  ground = new Ground(500,340,400,40);
	  bucket1 = new Bucket(200,50,20,30);
	  bucket2 = new Bucket(250,50,20,30);
	  bucket3 = new Bucket(300,50,20,30);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
   bucket1.display();
   bucket2.display();
   bucket3.display();


 
}
function keyPressed() {
	Matter.Body.applyForce(ball.body,ball.body.position,20);
}


