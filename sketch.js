
var snow;
var snow1;
var snow2;
var snow3;
var snow4;
var snow5;

function preload(){
snow1=loadImage("snow1.jpg");
snow2=loadImage("snow2.jpg");
snow3=loadImage("snow3.jpg");
snow4=loadImage("snow4.webp");
snow5=loadImage("snow5.webp");

}

function setup() {
  createCanvas(1000,600);
  
}

function draw() {
  background(snow1);  
  createSnow();
  drawSprites();
  
}

function createSnow(){

  if(frameCount%9===0){

    snow= createSprite(Math.round(random(50,1450)), 0, 50, 50);
    snow.velocityY=4;

    var rand=Math.round(random(1,2));

    switch(rand){

      case 1: snow.addImage(snow4);
      snow.scale=0.1;
      break;

      case 2: snow.addImage(snow5);
      snow.scale=0.1;
      break;

      default:
        break;
    }
  }

}