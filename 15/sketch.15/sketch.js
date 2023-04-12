let x = 0;
let y = 0;
let dim = 80.0;
let font;

function preload() {
  font = loadFont('Myriad.otf'); // Load the font
}

function setup() {
  createCanvas(1000, 1000); // Set canvas size to 1000x1000 pixels
  background(255); // Set background color to white
  backgroundImg = loadImage('Grid.jpeg'); // Load the background image
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(210);
}

function draw() {
  image(backgroundImg, 0, 0); // Draw the background image
  // Animate by increasing our x value
  x = x + 0.8;
  // If the shape goes off the canvas, reset the position
  if (x > width + dim) {
    x = -dim;
  }

  // Even though our rect command draws the shape with its
  // center at the origin, translate moves it to the new
  // x and y position
  translate(x, height / 2 - dim / 2);
  fill(255, 165, 0); // set orange color
  text("w", 0, 0);

  // Transforms accumulate. Notice how this rect moves
  // twice as fast as the other, but it has the same
  // parameter for the x-axis value
  translate(x, dim);
  fill(0, 0, 139); // set dark blue color
  text("W", 0, 0);
}

// Original code source: https://p5js.org/examples/transform-translate.html