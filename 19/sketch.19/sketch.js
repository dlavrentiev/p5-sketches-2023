let font;
let textGraphic;

function preload() {
  font = loadFont('FREEFATFONT.otf');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);

  // Create a graphic for the text
  textGraphic = createGraphics(200, 200);
  textGraphic.textFont(font);
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(100);
  textGraphic.text('w', 100, 100);
}

function draw() {
  background(220);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);

  push();
  translate(0, 0, 100);
  texture(textGraphic);
  plane(200, 200);
  pop();

  push();
  texture(textGraphic);
  translate(0, 100, 0);
  rotateX(HALF_PI);
  plane(200, 200);
  pop();

  push();
  texture(textGraphic);
  translate(100, 0, 0);
  rotateY(HALF_PI);
  plane(200, 200);
  pop();
} 

// Original code source: https://editor.p5js.org/aferriss/sketches/ryL3DmdG7