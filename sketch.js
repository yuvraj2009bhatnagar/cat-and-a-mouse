var jerry, tom , jerryimage ,  jerryimage2 , tomimage , tomimage2 , tomimage2, BG , BGimage;


function preload() {
    
 BGimage = loadImage("garden.png");
 tomimage = loadImage("tomOne.png");
    jerryimage = loadImage("jerryOne.png");
    tomimage2 = loadAnimation("tomTwo.png", "tomThree.png");
    jerryimage2 = loadAnimation("jerryTwo.png", "jerryThree.png");
  tomimage3 = loadAnimation("tomFour.png");
 jerryimage3 = loadAnimation("jerryFour.png");

}

function setup(){
    createCanvas(1000,800);

    BG = createSprite(500,390,2000,2);
BG.addImage(BGimage);
  
    tom = createSprite(759,618,20,20)
    tom.addImage(tomimage);
tom.scale = 0.2

jerry = createSprite(110,631,20,20);
jerry.addImage(jerryimage);
  jerry.scale = 0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(tom.x - jerry.x < (tom.width - jerry.width)/2 ){
tom.addAnimation("catstop", tomimage3);
tom.changeAnimation("catstop");
  jerry.addAnimation("mousestop", jerryimage3);
jerry.changeAnimation("mousestop");
tom.velocityX = 0;
}


    drawSprites();
}


function keyPressed(){
  
  
  if(keyCode === LEFT_ARROW){
  tom.velocityX = -5;
tom.addAnimation("catRunning", tomimage2);
tom.changeAnimation("catRunning");
jerry.addAnimation("mouseRunning", jerryimage2);
jerry.changeAnimation("mouseRunning");
  }


}
