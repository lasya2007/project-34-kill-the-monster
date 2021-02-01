const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var world,engine;
var bgimg;
var ground;
var hero;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26;
var monster;

function preload() {
  bgimg=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

  ground=new Ground(500,550);

  hero=new Hero(300,500);

  rope=new Fly(hero.body,{x:300,y:150});

  block1=new Block(550,510);
  block2=new Block(550,470);
  block3=new Block(550,430);
  block4=new Block(550,390);
  block5=new Block(550,350);
  block6=new Block(550,310);
  block7=new Block(550,270);

  block8=new Block(620,510);
  block9=new Block(620,470);
  block10=new Block(620,430);
  block11=new Block(620,390);
  block12=new Block(620,350);
  block13=new Block(620,310);

  block14=new Block(690,510);
  block15=new Block(690,470);
  block16=new Block(690,430);
  block17=new Block(690,390);
  block18=new Block(690,350);
  block19=new Block(690,310);
  block20=new Block(690,270);
  block21=new Block(690,230);
  block22=new Block(690,190);

  block23=new Block(760,510);
  block24=new Block(760,470);
  block25=new Block(760,430);
  block26=new Block(760,390);

  monster=new Monster(950,420);
  
}

function draw() {
  Engine.update(engine);
  background(bgimg);

 

  ground.display();

  hero.display();

  rope.display();

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
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  monster.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

