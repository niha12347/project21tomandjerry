var backgroundImg ;
var cat1Img ;
var cat2Img ;
var cat3Img ;
var cat4Img ; 
var mouse1Img ;
var mouse ;
var cat ;
var cat2Img ;
var mouse2Img ;
var mouse3Img ;
 var mouse4Img ;
var catSleeping ;
var mouseStanding ;
var catlastImage ;
var mouselastImage ;
var mouseTeasing ;
function preload() {
    //load the images here
    backgroundImg = loadImage ("images/garden.png");
   catImg1= loadAnimation("images/cat1.png");
   catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3= loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.Scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding" , mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width + mouse.width)/2 ){
      cat.velocityX=0;
      cat.addAnimation("catlastImage",catImg3);
            cat.x =300;
            cat.scale=0.2;
            cat.changeAnimation("catlastImage");
            mouse.addAnimation("mouselastImage", mouseImg3);
            mouse.scale=0.15;
            mouse.changeAnimation("mouselastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyPressed === LEFT_ARROW ){
   
   cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
   
  mouse.addAnimation("mouseTeasing",mouse2Img);
  mouse.changeAnimation ("mouseTeasing");
  mouse.framedelay= 25 ; 
  }
 
  if (keyPressed === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2Img);
    mouse.chamgeAnimation ("mouseTeasing");
    mouse.framedelay= 25 ; 
  }




}
