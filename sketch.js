const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg;
var ball, slingshot;
var ground,ground2;
var stand1;
var score=0

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


     ground = new Ground(600,395,1200,10); 
     ground2 = new Ground(900,170,200,10);
    ball= Bodies.circle(50,200,20);
    World.add(world,ball);
    box1=new Box(330,235,30,40)
    box2=new Box(360,235,30,40)
    box3=new Box(390,235,30,40)
    box4=new Box(420,235,30,40)
    box5=new Box(450,235,30,40)
    box6=new Box(360,195,30,40)
    box7=new Box(390,195,30,40)
    box8=new Box(420,195,30,40)
    box9=new Box(390,155,30,40)
    stand1=new Stand(390,250,250,10);
  
   
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(this.ball,{x:100, y:200});
}

function draw(){
    background("brown");
    Engine.update(engine);
    //strokeWeight(4);
    
    text("score"+score,750,40)
     ellipse(ball.position.x,ball.position.y,40,40); 
    slingshot.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display(); 
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box1.score()
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score()
    box7.score()
    box8.score()
    box9.score()
    stand1.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
