
var player;
var score=0;
var wormGroup;
var swampimage;

function preload(){
  swampimage=loadImage("images/swampimg.png");
  playerimage=loadImage("images/frog.png");
  wormimage=loadImage("images/worm.png");
}

function setup() {
  createCanvas(600,600);
  swamp=createSprite(300,300)
  swamp.scale=2.5;
  swamp.addImage(swampimage);
player=createSprite(50,560);
player.addImage(playerimage);
player.scale=0.3;
wormGroup=new Group();


}


function draw() {
background("black");  
player.x=mouseX;
player.y=mouseY;

noFill();
stroke("red");
ellipse(100,350,40,40);
player.x=mouseX;
player.y=mouseY;

if(player.x<150 && player.y<380 && player.y>320 && player.x>90){
  player.x=30;
  player.y=30;
  text("No cheating",200,200);
            
}
generateWorms();
for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }            
drawSprites();
textSize(20);
  text("Worms destroyed: "+score,350,50);

}
function generateWorms(){
  if(frameCount%30==0){
  var worm=createSprite(100,350);
  worm.addImage(wormimage);
    worm.scale=0.3;
 
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
    wormGroup.add(worm);
}
}
 