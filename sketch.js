function setup() {
    createCanvas(400, 400);
    background("#851199");
  }
  
  function draw() {
    
    stroke("#FF5F95");
    fill("rgb(67,146,241)")
    
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
        rect(mouseX, mouseY, 20);
    }
    
  }