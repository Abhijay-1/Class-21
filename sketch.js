var fixedRect, movingRect;
var GO1, GO2, GO3, GO4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY =-5
  fixedRect.velocityY = 5

  
  GO1 = createSprite(100,100,50,50);
  GO1.shapeColor = "green";
  GO2 = createSprite(200,100,50,50);
  GO2.shapeColor = "green";
  GO3 = createSprite(300,100,50,50);
  GO3.shapeColor = "green";
  GO4 = createSprite(400,100,50,50);
  GO4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;



 if(isTouching(movingRect, GO2)){
    movingRect.shapeColor = "blue"
    GO2.shapeColor = "blue"
 }
 else{
  movingRect.shapeColor = "green"
  GO2.shapeColor = "green"
 }
bounceOff(fixedRect,movingRect);

drawSprites();
}
function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 +object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    &&object1.y -object2.y < object2.height/2 + object1.height/2
    &&object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
}
else {
    return false;
}
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2 + object2.width/2&&object2.x-object1.x<object2.width/2+object1.width/2){
    object1.velocityX=object1.velocityX*(-1) 
    object2.velocityX=object2.velocityX*(-1)
   }
  if(object1.y-object2.y<object2.height/2+object1.height/2&&object2.y-object1.y<object2.height/2+object1.height/2){
    object1.velocityY=object1.velocityY*(-1)
    object2.velocityY=object2.velocityY*(-1)
  }
}
