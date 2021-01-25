const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ground;
var polygon;
var bird, slingshot;
var boxes1,boxes2,boxes3,boxes4,boxes5,boxes6,boxes7,boxes8,boxes9;

function preload() {
    polygon = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //bodies
// boxstand1 
box1=new Box(200,150,30,40);
box2=new Box(220,160,30,40);
box3=new Box(250,170,30,40);
box4=new Box(260,180,30,40);
box5=new Box(280,190,30,40);
box6=new Box(290,200,30,40);
box7=new Box(300,220,30,40);
box8=new Box(330,235,30,40);
box9=new Box(360,235,30,40);
box10=new Box(390,235,30,40);
box11=new Box(420,235,30,40);
box12=new Box(450,235,30,40);
box13=new Box(360,195,30,40);
box14=new Box(390,195,30,40);
box15=new Box(420,195,30,40);
box16=new Box(390,155,30,40);
// boxesstand2
boxes1=new Box(100,80,30,40);
boxes2=new Box(120,70,30,40);
boxes3=new Box(130,60,30,40);
boxes4=new Box(140,55,30,40);
boxes5=new Box(150,45,30,40);
boxes6=new Box(160,40,30,40);
boxes7=new Box(170,30,30,40);
boxes8=new Box(180,25,30,40);

ball=Bodies.circle(50,200,50);
World.add(world,ball);
slingshot=new SlingShot(this.ball,{x:100,y:200})

}
function draw(){
    background(56,46,40);
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
fill("pink");
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill("skyblue");
box13.display();
box14.display();
box15.display();
fill("pink");
box16.display();
//second stand
fill("skyblue");
boxes1.display();
boxes2.display();
boxes3.display();
boxes4.display();
boxes5.display();
fill("pink");
boxes6.display();
boxes7.display();
boxes8.display();
fill("skyblue");
boxes16.display();
imageMode(CENTER);
image(polygon,ball.position.x,ball.position.y,40,40);
slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
















