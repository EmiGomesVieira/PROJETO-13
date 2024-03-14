var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
var garden, rabbit;
var gardenImg, rabbitImg, appleImg, orangeImg, redImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup() {

  createCanvas(400, 400);

  // mover o fundo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  // criar sprite do coelho
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);

  // Adicione o código para mover o coelho na posição X usando mouseX
  rabbit.x = World.mouseX;

  // Chame as funções para criar maçãs, folhas laranjas e folhas vermelhas
  createApples();
  createLeaves();
  createRed();

  drawSprites();

}

function createApples() {
  if (frameCount % 80 === 0) {
    var apple = createSprite(Math.round(random(50, 350)), 40, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.05;
    apple.velocityY = 3;
    apple.lifetime = 150;
  }
}

function createLeaves() {
  if (frameCount % 80 === 0) {
    var orangeLeaf = createSprite(Math.round(random(50, 350)), 40, 10, 10);
    orangeLeaf.addImage(orangeImg);
    orangeLeaf.scale = 0.05;
    orangeLeaf.velocityY = 3;
    orangeLeaf.lifetime = 150;
  }
}

function createRed() {
  if (frameCount % 80 === 0) {
    var redLeaf = createSprite(Math.round(random(50, 350)), 40, 10, 10);
    redLeaf.addImage(redImg);
    redLeaf.scale = 0.05;
    redLeaf.velocityY = 3;
    redLeaf.lifetime = 150;
  }
}
