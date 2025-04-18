const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,390,1200,20);


    box1 = new Box(500,320,70,70);
    box2 = new Box(700,320,70,70);
   
    pig1 = new pig(600,350);
    log1 = new log(600,260,300,PI/2)

    box3 = new Box(500,240,70,70);
    box4 = new Box(700,240,70,70);
   
    pig2 = new pig(600,220);
    log2 = new log(600,180,300,PI/2)

    box5 = new Box(600,160,70,70);

    log3 = new log(570,120,150,PI/7)
    log4 = new log(640,120,150,PI/-7)

    bird1 = new bird(100,100);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}