// Declare the W shape
let W;

function setup() {
  createCanvas(1000, 1000);
  background(255, 20, 147); // Neon pink background

  // Define the W shape
  W = createGraphics(width, height);
  W.fill(255); // White
  W.textSize(height / 2);
  W.textAlign(CENTER, CENTER);
  W.text('W', width / 2, height / 2);
}

function draw() {
  // Draw inside the W using the mouse cursor in neon blue (30, 144, 255)
  if (mouseIsPressed) {
    if (W.get(mouseX, mouseY)[0] === 255) { // Check if the mouse is inside the W
      W.stroke(30, 144, 255); // Neon blue
      W.strokeWeight(10);
      W.line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }

  // Display the W
  image(W, 0, 0);
}
