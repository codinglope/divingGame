class Player {
    
  constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      
     
  }

  moveUp() {
    if(this.y > 0) {
      this.y -= 10;
     
  }}

  moveDown() {
    if(this.y < innerHeight) {
      this.y += 10;
    }

    
  }

 

  draw() {
    // fill("turquoise");
      // rect(this.x, this.y, this.size,this.size);
       image(diver,this.x, this.y, this.size,this.size);
  }

}


