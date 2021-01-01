
//namespacing or referencing or nick-naming
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);

  //creating our engine
  engine= Engine.create();
  world=engine.world;
  
  var options={
    isStatic:true
  }

  //i want to create a rectangular body
  ground= Bodies.rectangle(200,350,400,20, options);
  World.add(world,ground);
  console.log(ground);
  
  var options2={
    restitution:0.8
  }
  ball= Bodies.circle(200,200,20,options2);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(255); 
  //update your engine every moment
  Engine.update(engine);
  rectMode(CENTER); 

  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
}