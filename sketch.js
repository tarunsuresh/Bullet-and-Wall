
var bullet;
var Thickness,bulletSpeed,bulletWeight,damage;
function setup() {
  createCanvas(600, 170);
  bullet=createSprite(50,60,10,10);
  Thickness=random(22,83)
  bulletSpeed=random(223,321);
  bulletWeight=random(30,52);
  damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(Thickness*Thickness*Thickness)
}

function draw() {
  background(180);
  
  var wall=createSprite(590,60,Thickness,height/2);
  
  console.log(damage)

  var border1=createSprite(200,40,500,10);
  var border2=createSprite(200,80,500,10);

  if(keyDown("space")){
    bullet.velocityX=bulletSpeed;
  }

  

  

  if(bullet.isTouching(wall)){
   bullet.collide(wall)
  }

  if(bullet.isTouching(wall)&&damage>10){
    bullet.setColor="green";
   }

  

 
  drawSprites();
  
  
  }

  wallThickness = 5
  bulletWeight = 2

