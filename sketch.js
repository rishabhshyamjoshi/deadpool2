const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1;
var bird;
var world, engine;
var mConstraint;
var slingshot;
var T;
var box;
var ball;

var gameState = "onSling";

function preload() {
  dotImg = loadImage("images/bird2.png");
  boxImg = loadImage("images/tansk1.jpg");
  bkgImg = loadImage("images/tansk.jpg");
  woodImg = loadImage("images/sheild.jpg");
  woodImg1 = loadImage("images/sheild.jpg");
  sling1Img = loadImage("images/sling1.png");
  load = createButton('bird')
  box1Img = loadImage("images/pig.png");
  ballImg = loadImage("images/BALL.png")
  }

function setup() {
  var canvas = createCanvas(1450, 620);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);
  //ball1 = new Ball(random(200,400), random(200,400), 20);
 ///// ball2 = new Ball(random(200,400), random(200,400), 20);
 // ball3 = new Ball(random(200,400), random(200,400), 20);
 // ball4 = new Ball(random(200,400), random(200,400), 20);

  wood1 = new Log(650,200,67,67);
  wood3 = new Log(650,200,67,67);
  wood4 = new Log(650,200,67,67);
  wood5 = new Log(650,200,67,67);
  wood6 = new Log(650,200,67,67);
  wood8 = new Log(1080,200,67,67);
  wood9 = new Log(1080,200,67,67);
  wood10 = new Log(1080,200,67,67);
  wood11 = new Log(1080,200,67,67);
  wood12 = new Log(1080,200,67,67);
  wood13 = new Log(760,200,67,67);
  wood14 = new Log(760,200,67,67);
  wood15 = new Log(760,200,67,67);
  //wood16 = new Log(880,50,450,30);
  wood17 = new Log(1005,120,67,67);
  wood18 = new Log(1005,120,67,67);
  wood19 = new Log(1005,120,67,67);
  //wood20 = new Log(890,60,280,20);

  box = new Box(900,55, 80,80);
  box1 = new Box(900,95,80,80);
  box2 = new Box(900,30, 80,80);
  bird = new Bird(100,0, 23);
 // ball = new Ball(200,200,20);

  slingshot = new SlingShot(bird.body,{x:200, y:470});
  }
  
  function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

  function keyPressed(enter) {
    World.remove(world, bird.body);
    bird = new Bird(170, 300, 20);
    slingshot.attach(bird.body);
    bird.r = 17;
  }
    
  ball = new Ball(random(200,400), random(200,400), 20)
  

  function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
  if(keyDown("space")){
     slingshot.attach(bird.body);
  }
}

function draw() {
  background(bkgImg);
  Engine.update(engine);

  text("press space to bring back the bird",100,100);
  text("dragg the mouse by preesing on the bird and Release the mouse ",100,130);

  box.display();
  box1.display();
  box2.display();
  slingshot.display();

  bird.display();
  //ball.display();

  ground.display();

  wood1.display();
  wood3.display();
  wood4.display();
  wood5.display();
  wood6.display();
  wood8.display();
  wood9.display();
  wood10.display();
  wood11.display();
  wood12.display();
  wood13.display();
  wood14.display(); 
  wood15.display(); 
  //wood16.display();
  wood17.display();
  wood18.display();
  wood19.display();
  //wood20.display();

}
