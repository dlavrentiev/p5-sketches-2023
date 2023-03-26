let angle = 0;
let direction = 1;
let bgColor = [255, 215, 0];
let strokeColor = 255;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(bgColor);
  translate(width / 2, height / 2);

  let w = 200;
  let h = 300;
  let scaleFactor = map(sin(angle), -1, 1, 0.5, 2);
  let rotationAngle = map(sin(angle), -1, 1, -90, 90);

  push();
  scale(scaleFactor);
  rotate(rotationAngle);
  stroke(strokeColor); // Set stroke color
  strokeWeight(15);

  // Left slant
  line(-w / 2, -h / 2, -w / 4, h / 2);

  // Left-middle slant
  line(-w / 4, h / 2, 0, -h / 2);

  // Right-middle slant
  line(0, -h / 2, w / 4, h / 2);

  // Right slant
  line(w / 4, h / 2, w / 2, -h / 2);

  pop();

  angle += 0.5 * direction;
}

function mouseClicked() {
  direction *= -1;
  // Invert colors
  if (bgColor[0] === 255 && bgColor[1] === 215 && bgColor[2] === 0) {
    bgColor = [255, 255, 255];
    strokeColor = color(255, 215, 0);
  } else {
    bgColor = [255, 215, 0];
    strokeColor = color(255, 255, 255);
  }
}
