let angle = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(255, 215, 0);
  translate(width / 2, height / 2);

  let w = 200;
  let h = 300;
  let scaleFactor = map(sin(angle), -1, 1, 0.5, 2);
  let rotationAngle = map(sin(angle), -1, 1, -90, 90);

  push();
  scale(scaleFactor);
  rotate(rotationAngle);
  stroke(255); // Set stroke color to white
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

  angle += 0.5;
}