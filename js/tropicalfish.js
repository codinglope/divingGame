class Tropicalfish {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;


  }

  move() {
    this.x -= this.size / 20 * scrollSpeed; //parallax
    if (this.x <= 0) {
      this.x = 1000;
      this.y = Math.floor(Math.random() * innerHeight);  
    }

    if (this.x < player1.x + 200 && this.x > player1.x) {
      if (this.y < player1.y + 50 && this.y > player1.y - 50) {
        points+= 1;
        document.getElementById("points").innerHTML = points + "points";

      }
    }
  }




  draw() {
    // fill("turquoise");
    // rect(this.x, this.y, this.size,this.size);
    image(tropicalfishimg, this.x, this.y, this.size*2, this.size*2);
  }

}