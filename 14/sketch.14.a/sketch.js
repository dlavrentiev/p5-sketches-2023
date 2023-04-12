let bgImg;
let font;

function preload() {
  bgImg = loadImage('Grid.jpeg');
  font = loadFont('Myriad.otf');
}

function setup() {
  createCanvas(1000, 1000);
  background(bgImg);
  textFont(font);
  textSize(50);
}

function draw() {
  // Call the variableW() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
  variableW(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableW() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small "W" if the mouse is moving slowly
// and draws a large "W" if the mouse is moving quickly

function variableW(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  fill(0);
  noStroke();
  if (speed < 10) {
    text("W", x, y);
  } else {
    textSize(speed * 2);
    text("W", x, y);
  }
}


// Original code source: https://p5js.org/examples/drawing-patterns.html