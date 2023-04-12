let myFont;
let fontSize = 800;
let angle = 0;

function preload() {
  myFont = loadFont('FREEFATFONT.otf');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  textFont(myFont);
  textSize(fontSize);
}

function draw() {
  background(50, 205, 50); // Lime green background
  textAlign(CENTER, CENTER);
  rotateX(constrain(angle, -PI / 3, PI / 3)); // Limit the rotation angle to -60 to 60 degrees
  rotateY(angle);
  text('W', 0, 0);
  angle += 0.01;
}

// Original code source: https://p5js.org/examples/3d-geometries.html