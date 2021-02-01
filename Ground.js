class Ground{
    constructor(x,y){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,1000,20,options);
        this.width=1000;
        this.height=20;
        World.add(world,this.body);
    }
    display(){
        push();
        strokeWeight(1);
        stroke("black");
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}