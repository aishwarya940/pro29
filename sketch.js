const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, ground, box1, polygon, slingshot;

function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 395, 800, 10);
  stand = new Ground(500, 300, 400, 10);

  box1 = new Box(550, 275, 50, 50);
  box2 = new Box(600, 275, 50, 50);
  box3 = new Box(650, 275, 50, 50);
  box4 = new Box(575, 325, 50, 50);
  box5 = new Box(625, 325, 50, 50);
  box6 = new Box(600, 375, 50, 50);

  polygon = Bodies.circle(100, 200, 50);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});

}

function draw() {

  background(255,255,255);

  Engine.update(engine);

  ground.display();
  stand.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  //polygon.display();
   ellipse(this.polygon.position.x,this.polygon.position.y,50,50)
  slingshot.display();

  drawSprites();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
/*
function display(){
  var angle = polygon.body.angle;
  push();
  translate(polygon.body.position.x, polygon.body.position.y);
  rotate(angle);
  pop();
}*/
