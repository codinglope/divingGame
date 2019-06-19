class Game {
constructor(){

}
  // drawGrid() {

  //   var size = 50;

  //   for (var x = 0; x < innerWidth; x += size) {
  //     for (var y = 0; y < innerHeight; y += size) {
  //       rect(x, y, size, size);
  //     }
  //   } 


  // }
  background(){

    // fill("blue");
    // rect(0,0,innerWidth, innerHeight);

  image(bg, x1, 0, width, height);

  image(bg2, x2, 0, width, height);
  
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < - width){
    x1 = width;
  }
  if (x2 < - width){
    x2 = width;
  }
  }

  over() {
    //alert("You idiot");
    document.getElementById("canvas").style.display="none";
    scrollSpeed = 0;
   
  }
}