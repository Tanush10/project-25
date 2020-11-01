
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,bin;


function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=Bodies.rectangle(400,650,800,20,{isStatic:true});
	World.add(world,ground);
	var options ={
		isStatic:false,
		restitition:0.3,
		friction:0.5,
		density:1.2
	}
	ball=Bodies.circle(100,640,20,options)
	World.add(world,ball);
	Engine.run(engine);

}


function draw() {
  
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
	ellipseMode(RADIUS);
	ellipse(ball.position.x,ball.position.y,20);
	keyPressed();
}

function keyPressed (){
if (keyCode=== UP_ARROW ){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}) 

}
}