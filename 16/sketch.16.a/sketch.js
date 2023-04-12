function setup() {
  createCanvas(1000, 1000); // Set canvas size to 1000x1000 pixels
  textAlign(CENTER, CENTER);

  // Set up the shadow properties
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';

  // Set white background
  background(255);

  // Draw 12 "W" texts at random positions, sizes, and colors
  for (let i = 0; i < 12; i++) {
    let x = random(width); // Random x position
    let y = random(height); // Random y position
    let size = random(12, 50); // Random size between 50 and 250
    let r = random(255); // Random red value between 0 and 255
    let g = random(255); // Random green value between 0 and 255
    let b = random(255); // Random blue value between 0 and 255

    textSize(size);
    fill(r, g, b); // Set the text color to the random RGB value
    text("W", x, y);
  }
}
// Original code source: https://p5js.org/reference/#/p5/drawingContext