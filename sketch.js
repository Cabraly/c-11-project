 var sea,ship;
 var seaImg,shipImg1;

function preload(){
  seaImg = loadAnimation("sea.png");
  shipImg1 = loadImage("ship-1.png,","ship-1.png", "ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");
  
sea=createSprite(400,200);
sea.addImage(seaImg);
sea.velocity= -5;
sea.scale= 0.3;

ship=createSprite(130,200,20,20);
ship.addAnimation("movingShip", shipImg1);
ship.scale= 0.25;

}

function draw() {
  background(0);
  sea.velocityX= -3;
    drawSprites();

if (keyDown("up")){
  ship.y=ship.y-10;
}
if (keyDown("down")){
  ship.y=ship.y-10;
}
if (keyDown("left")){
  ship.x=ship.x-10;
}
if (keyDown("right")){
  ship.x=ship.x+10;
}

}
