class Monster{
    constructor(x,y){
        var options={
            density:0.3
        }
        this.body=Bodies.circle(x,y,70,options);
        this.r=70;
        this.image=loadImage("Monster-01.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,140,140);
        pop();
    }
}