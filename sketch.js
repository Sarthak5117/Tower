const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
const Constraint =Matter.Constraint;

function preload(){
polygonImg= loadImage("poiygon.png")
}

function setup(){

    createCanvas(1200,700)
    engine=Engine.create()
    world=engine.world 
    Engine.run(engine)
 
    polygon=Bodies.cricle(160,384,20)
    World.add(world,polygon) 
}


function draw(){

background("black")

    textSize(40)
    text(mouseX+""+mouseY, 200,200)    

imageMode(CENTRE)    
image(polygonimg,polygon.position.x,polygon.y,50,50)
}