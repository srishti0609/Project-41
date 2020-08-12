const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=200;
var drops=[];
var drops;
var thunder;
function preload(){
    thunder=loadImage("images.png");

    
}

function setup(){
    var canvas = createCanvas(400,690);
    engine=Engine.create();
    world=engine.world;
     umbrella=new Umbrella(150,300,200,500);
     for(var i=0;i<maxDrops;i++){
            d1=new Drops(random(0,400),random(30,690),3);
           drops.push(d1);
            World.add(world,d1);
     }
   
    
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    umbrella.display();
    for(var j=0;j<drops.length;j++){
        drops[j].display();
        drops[j].update();
       image(thunder,0,-10,400,200);
    }
   
        
    
 
}

    


