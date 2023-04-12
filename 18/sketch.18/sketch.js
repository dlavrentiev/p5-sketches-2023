let myFont;

function preload() {
  myFont = loadFont('Myriad.otf');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(250);
  rotateY(frameCount * 0.01);
  textSize(500);
  textFont(myFont);
  fill(0, 0, 128);
  text('W', 0, 0);
}

