const game = new Game();
const player1 = new Player(10, 0, 100);
const fish  = new Fish(1000,250, 30);
const fish2 = new Fish(1000, 100, 10);
const fish3 = new Fish(1000,300,20);
const fish4 = new Fish(1000,100, 25);
const goldfish1 = new Goldfish(1000, 100, 20);
const goldfish2 = new Goldfish(1800, 100, 15);
const goldfish3 = new Goldfish(1400, 200, 20);
const goldfish4 = new Goldfish(1010, 200, 20);
const goldfish5 = new Goldfish(1100, 200, 20);
const goldfish6 = new Goldfish(1600, 200, 20);
const goldfish7 = new Goldfish(1100, 200, 20);
const goldfish8 = new Goldfish(1200, 200, 20);
const marineangel1 = new Marineangelfish(1000, 100, 10);
const marineangel2 = new Marineangelfish(1000, 100, 15);
const marineangel3 = new Marineangelfish(1000, 100, 15);
const tropicalfish = new Tropicalfish(1000, 60,20);
const tropicalfish2 = new Tropicalfish(1000, 50,10);
const tropicalfish3 = new Tropicalfish(1050, 20,10);
const tropicalfish4 = new Tropicalfish(1020, 80,15);
const tropicalfish5 = new Tropicalfish(1009, 40,5);
const tropicalfish6 = new Tropicalfish(1005, 30,20);
let bg;
let bg2;
let x1 = 0;
let x2 = 1000;
let scrollSpeed = 0;
let song;
let zierfisch;
let orangefishimg;
let marineangel;
let tropicalfishimg;
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
  sharkimg = loadImage("assets/shark.png");
  orangefishimg =loadImage("assets/goldfish.png");
  marineangel = loadImage("assets/kaiserfish.png");
  tropicalfishimg= loadImage("assets/tropicalfish.png");
 
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
  goldfish1.draw();
  goldfish1.move();
  goldfish2.draw();
  goldfish2.move();
  goldfish3.draw();
  goldfish3.move();
  goldfish4.draw();
  goldfish4.move();
  goldfish5.draw();
  goldfish5.move();
  goldfish6.draw();
  goldfish6.move();
  goldfish7.draw();
  goldfish7.move();
  goldfish8.draw();
  goldfish8.move();
  marineangel1.draw();
  marineangel1.move();
  marineangel2.draw();
  marineangel2.move();
  marineangel3.draw();
  marineangel3.move();
  tropicalfish.draw();
  tropicalfish.move();
  tropicalfish2.draw();
  tropicalfish2.move();
  tropicalfish3.draw();
  tropicalfish3.move();
  tropicalfish4.draw();
  tropicalfish4.move();
  tropicalfish5.draw();
  tropicalfish5.move();
  tropicalfish6.draw();
  tropicalfish6.move();
  setInterval(function() {
    scrollSpeed+=0.0001;
  }, 10000)

  
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
  document.getElementById("game-over").style.display="none";
  document.getElementById("intro").style.display="none";
  document.getElementById("start-button").style.display="none";
  document.getElementById("h3").style.display="none";
  scrollSpeed = 2;
}



