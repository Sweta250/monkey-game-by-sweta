//Mam if i enter gamestaeEND it is not workingg or after few secs it is overlaping so i reduced the points mam.
var PLAY=1;
var END = 0;
var gamestate = PLAY;
var message;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, osGroup
var score=0;

function preload(){
  
  backgroundImage=loadImage("forest.jpg");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  soilImg=loadAnimation("soil.jpg");
 
}



function setup() {
  createCanvas(400,400);
  
  background = createSprite(0,0,400,400);
  background.addImage(backgroundImage);
  background.scale = 2.1;
 
  monkey=createSprite(26,360);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  Ground = createSprite(200,400,400,20);
  //Ground.scale=0.5;
  Ground.shapeColor="brown";
  
  //Ground.addAnimation("soilgrd",soilImg);  
  foodsGroup=new Group();
  osGroup=new Group();
  
}


function draw() {
  
  background.velocityX = -3 

    
  if(gamestate===PLAY){
    
    food();
    rocks();
    
     if (background.x < 0){
      background.x = background.width/2;
    }
     //Ground.velocityX = -(4+score*1.5/100);
  
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -15;
        //jumpSound.play();
    }
  monkey.velocityY = monkey.velocityY + 0.8
    
    if(foodsGroup.isTouching(monkey)){
      foodsGroup.destroyEach();
      score=score+1;
    }
    
    if(osGroup.isTouching(monkey)){
      //osGroup.destroyEach();
      gamestate=END
      //score=score-10;
    }
   }
  
 if(gamestate==END){
   background.velocityX = 0;
      monkey.velocityY = 0
      
     
      //set lifetime of the game objects so that they are never destroyed
    foodsGroup.setLifetimeEach(-1);
    osGroup.setLifetimeEach(-1);
     
     foodsGroup.setVelocityXEach(0);
     osGroup.setVelocityXEach(0);    
   
   
   
 } 


  
  
 monkey.collide(Ground);
  
  
  
  
  
  
  
  drawSprites();
  textSize(14)
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY)
  fill("white")
  text("Score:"+score,303,52);
  
  
}






function food(){
  if(frameCount % 80 === 0){
  var banana=createSprite(600,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
    banana.velocityX = -7; 
    banana.y = Math.round(random(30,250));
    
    banana.lifetime = 200;
  foodsGroup.add(banana); 
  }
}

function rocks(){
  if(frameCount%80===0){
  var rock=createSprite(400,372,60,10);
  rock.addImage(obstaceImage);
  rock.scale=0.1;
    rock.velocityX = -7; 
    //rock.y = Math.round(random(30,250));
    
    rock.lifetime = 200;
    
    
    
  osGroup.add(rock);
    
    
  }
}






