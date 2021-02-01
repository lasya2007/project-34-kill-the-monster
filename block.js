class Block{
    constructor(x,y){
        var options={
            'friction':1,
            'density':1,
            'restitution':0.8
        }
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height=40;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}