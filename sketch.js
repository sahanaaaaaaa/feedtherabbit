var garden,rabbit;
var gardenImg,rabbitImg;

var applesGroup, appleImage;
var leavesGroup, leafImage;
var orangeleavesGroup, orangeleafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
  orangeleafImage = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

applesGroup = createGroup();
leavesGroup = createGroup();
orangeleavesGroup = createGroup();

}


function draw() {
  background(0);
  
 rabbit.x = mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();

  createLeaves();

  createOrangeleaves();

  applesGroup.setLifetimeEach(-1);
  leavesGroup.setLifetimeEach(-1);
  orangeleavesGroup.setLifetimeEach(-1);

  drawSprites();
}

function createApples() {
  if (frameCount % 100 === 0){
  
    var apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImage);
    apple.velocityY = 5;
    apple.lifetime = -0.1;
    apple.scale = 0.1;

 applesGroup.add(apple);
  }
}

  function createLeaves() {
    if(frameCount % 90 === 0 ){
     var leaf = createSprite(random(50,350),40,10,10);
     leaf.addImage(leafImage);
     leaf.velocityY= 5;
     leaf.lifetime = -0.1;
     leaf.scale = 0.1;
     leavesGroup.add(leaf);
     
}
  }
  function createOrangeleaves() {
    if(frameCount % 80 === 0){
      var orangeleaf = createSprite(random(50,350),40,10,10);
      orangeleaf.addImage(orangeleafImage);
      orangeleaf.velocityY=5;
      orangeleaf.lifetime = -0.1;
      orangeleaf.scale = 0.1;
      orangeleavesGroup.add(orangeleaf);
    }
  }
 
 

