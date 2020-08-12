class Umbrella{
    constructor(x,y,w,h){
        var options={
            isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
       this.image=loadImage("man.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        image(this.image,pos.x,pos.y,this.w,this.h);
   
    }
}