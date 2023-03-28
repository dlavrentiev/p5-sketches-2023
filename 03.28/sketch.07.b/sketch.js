// Declare the W shape
let W;

function setup() {
  createCanvas(1000, 1000);
  background(255, 20, 147); // Neon pink background
  noStroke()
  
  // Define the W shape
  W = createGraphics(width, height);
  W.fill(255); // White
  W.textSize(height );
  W.textAlign(CENTER, CENTER);
  W.text('W', width / 2, height / 2);
  //image(W, 0, 0);

  
}

function draw() {
  // blendMode(MULTIPLY)

  for (let i=0;i<10;i++) {
    let rX = random(1000)
    let rY = random(1000)

    if (W.get(rX, rY)[0] === 255) { // Check if the mouse is inside the W
      ellipse(rX,rY,10)
      
    }

  }
  // Draw inside the W using the mouse cursor in neon blue (30, 144, 255)
  if (mouseIsPressed) {
    if (W.get(mouseX, mouseY)[0] === 255) { // Check if the mouse is inside the W
      stroke(30, 144, 255); // Neon blue
      strokeWeight(10);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }

  // Display the W
  
  
}