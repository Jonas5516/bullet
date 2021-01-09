var wall, thickness
var bullet, speed, weight, d

function setup(){
  var canvas = createCanvas(1200,400)
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = "grey"
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(50,200,20,20)
  bullet.velocityX = 20
  
}
 function draw(){
  background("black")
  if(isTouching(wall,bullet)){
    d = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
    bullet.velocityX = 0

  if(d > 10){
    wall.shapeColor = "red"
    
  }
  if(d < 10){
    wall.shapeColor = "green"
   
  }
}

  drawSprites();
 }

 