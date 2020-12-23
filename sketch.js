var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
   weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,5);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed
bullet.shapeColor="grey"
wall.shapeColor="orange"

}

 


function draw() {
  background("white"); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness
    if(damage>10){
    wall.shapeColor=color("red")
    }
    if(damage<10 ){
    wall.shapeColor=color("yellow");
    }
  
     } 
  drawSprites();
}
function hasCollided(ob1,ob2){
bulletrightedge=ob1.x+ob1.width
wallLeftedge=ob2.x
if(bulletrightedge>=wallLeftedge){
return true
}
return false

}