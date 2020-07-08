const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    paper = new Paper(15,70);
    ground = new Ground(800,height,1600,20);
    dustbin = new Dustbin(1350,380,200,20);
    launcher = new Launcher(paper.body,{x:200,y:100});
}
function draw(){
    background("white");
    Engine.update(engine);
    text("x:y "+mouseX+" "+mouseY,mouseX,mouseY);
    
    ground.display();
    paper.display();
    dustbin.display();
    launcher.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    console.log("kaveesh")
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

    }
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly()
}
