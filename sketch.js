const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ball;


function preload(){
bg=loadImage("sprites/bg.png")
}



function setup()
{
    createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    box3= new Box(900,250,70,70);
    box4= new Box(700,250,70,70);
    box5= new Box(800,100,70,70)
    pig2=new Pig(800,250,50,50)
    pig = new Pig(800,350,50,50);

    log= new Log(800, 300, 280, PI/2)
log1= new Log(800,200,280,PI/2)
log3=new Log(720,140,150,PI/7)
bird=new Bird(100,100,50,50)


log4=new Log(900,140,150,-PI/7)
    ground = new Ground(width/2,height,1000,20)
    ball=Bodies.circle(200,200,30);
    World.add(world,ball);
}

function draw()
{
    background(bg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
log3.display()
log4.display()
    log.display();
log1.display()

    //circle(ball.position.x,ball.position.y,30);
    //ellipseMode(RADIUS)
    //ellipse(ball.position.x,ball.position.y,30)

    box1.display();
    box2.display();
    ground.display();
    pig.display();
    box3.display();
    box4.display();
    pig2.display();
    box5.display()
     bird.display()
   // fill("red")
    //textSize(40)
    text(" x : "+mouseX+" y :"+mouseY, mouseX, mouseY);
}