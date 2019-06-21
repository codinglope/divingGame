const game = new Game();
const player1 = new Player(10, 0, 100);

const fish  = new Fish(1000,250, 30);
const fish2 = new Fish(1000, 100, 10);
const fish3 = new Fish(1000,300,20);
const fish4 = new Fish(1000,100, 25);
let bg;
let bg2;
let x1 = 0;
let x2 = 1000;
let scrollSpeed = 0;
let song;
let zierfisch;
let shark = new Shark(1000, 100,90);
let sharkimg;
let points = 0;

 function preload() {
song = loadSound("assets/intromusic.mp3");
}

function setup() {
  let canvas = createCanvas(1000,500);
 
  song.loop();
  canvas.parent("canvas");
  
  bg = loadImage("assets/bg.jpg");
  bg2 = loadImage("assets/bg2.jpg");
  zierfisch = loadImage("assets/zierfisch.png");
  diver = loadImage("assets/diver2.png");
  sharkimg = loadImage("assets/shark.png")

 
}

function draw() {
if(game.gameOver === false){
  var size = 50;

  game.background();
  
  player1.draw();
  fish.draw();
  fish.move();
  fish2.draw();
  fish2.move();
  fish3.draw();
  fish3.move();
  fish4.draw();
  fish4.move();
  shark.draw();
  shark.move();

  setInterval(function() {
    scrollSpeed+=0.001;
  }, 3000)
}

  
} 

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player1.moveUp();
  } if (keyCode === DOWN_ARROW) {
    player1.moveDown();
  }
 
  
  //clear();
  //player1.draw();
  
}

function start(){

  document.getElementById("canvas").style.display="block";
  document.getElementById("points").style.display="block";
  document.getElementById("gameover").style.display="none";
  document.getElementById("intro").style.display="none";
  document.getElementById("start-button").style.display="none";
  scrollSpeed = 2;
}
