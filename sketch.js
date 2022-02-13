const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var groundA;
var score = 0;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(600,400);
    background("black");
    engine = Engine.create();
    world = engine.world;
    imageMode(CENTER)
    ground = new Ground(300,height,650,20);
    stand = new Ground(400, 300, 120, 10);
    stand2 = new Ground(450, 150, 120, 10);
    block1 = new Box(360, 285, 20, 20);
    block2 = new Box(380, 285, 20, 20);
    block3 = new Box(400, 285, 20, 20);
    block4 = new Box(420, 285, 20, 20);
    block5 = new Box(440, 285, 20, 20);
    block6 = new Box(380, 270, 20, 20);
    block7 = new Box(400, 270, 20, 20);
    block8 = new Box(420, 270, 20, 20);
    block9 = new Box(400, 260, 20, 20);
    block10 = new Box(410, 135, 20, 20);
    block11 = new Box(430, 135, 20, 20);
    block12 = new Box(450, 135, 20, 20);
    block13 = new Box(470, 135, 20, 20);
    block14 = new Box(490, 135, 20, 20);
    block15 = new Box(430, 120, 20, 20);
    block16 = new Box(450, 120, 20, 20);
    block17 = new Box(470, 120, 20, 20);
    block18 = new Box(450, 110, 20, 20);
    polygon = Bodies.circle(175, 175, 15);
    World.add(world, polygon);

    sling = new Sling(polygon,{x:175,y:175});
    Engine.run(engine);

}

function draw() {
    Engine.update(engine);
    background("black");
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    ground.display();
    stand.display();
    stand2.display();
    textSize(20);
    text("score: " + score, 25, 25);
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    sling.fly();
}
