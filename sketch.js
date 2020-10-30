const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg,boy;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var band;

function preload()
{
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	
	engine = Engine.create();
	world = engine.world;
	
	tree = new Tree(1050,580,450,600);

	stone = new Stone(235,420,30);

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(950,100,30);
	mango3 = new Mango(1080,200,30);
	mango4 = new Mango(1050,30,30);
	mango5 = new Mango(1200,230,30);
	mango6 = new Mango(930,220,30);
	
	band = new Band(stone.body,{x:235,y:420});

	Engine.run(engine);
  
}

function draw() {
  background(180);
  
  image(boyImg,200,340,200,300);
  
  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  band.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    band.fly();
}

function detectCollision(stone,bodyB) {
	stonePos = stone.body.position;
	bodyBpos = bodyB.body.position;

	var distance = dist(stonePos.x,stonePos.y,bodyBpos.x,bodyBpos.y);
	if (distance<=stone.r+bodyB.r) {
		Matter.Body.setStatic(bodyB.body,false);
	}
}