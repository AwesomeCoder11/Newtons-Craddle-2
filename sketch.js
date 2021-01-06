const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  canvas = createCanvas(windowWidth/2, windowHeight/1.5)
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  ground = new Ground(400,65,700,30);

  bobObject1 = new Ball(140,300,50,50);

	bobObject2 = new Ball(280,300,50,50);
	
	bobObject3 = new Ball(420,300,50,50);
	
	bobObject4 = new Ball(560,300,50,50);
	
  bobObject5 = new Ball(700,300,50,50);
  
  rope1 = new Rope(bobObject1.body, { x: 200, y: 50 });
  rope2 = new Rope(bobObject2.body, { x: 250, y: 50 });
  rope3 = new Rope(bobObject3.body, { x: 300, y: 50 });
  rope4 = new Rope(bobObject4.body, { x: 350, y: 50 });
  rope5 = new Rope(bobObject5.body, { x: 400, y: 50 });
  
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



function keyPressed(){
if (keyIsDown(UP_ARROW)){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:85,y:-85});

}
}

function mouseDragged(){

  Matter.Body.setPosition(pendulum.body, {x: mouseX, y: mouseT});

}