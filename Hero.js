class Hero{
    constructor(x,y){
        var options={
            density:1,
            frictionAir:1
        }
        this.body=Bodies.circle(x,y,50,options);
        this.r=50;
        this.image=loadImage("Superhero-02.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,100);
        pop();
    }
}