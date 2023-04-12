let font;
let outlines = [];

function preload() {
  font = loadFont('Myriad.otf');
}

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(600);
  background(0);
}

function draw() {
  background(0);

  // Add new outline
  if (frameCount % 10 === 0) {
    outlines.push(new Outline());
  }

  // Display and update all outlines
  for (let i = outlines.length - 1; i >= 0; i--) {
    outlines[i].display();
    outlines[i].update();
    if (outlines[i].isOffCanvas()) {
      outlines.splice(i, 1);
    }
  }

  // Draw the central letter 'W' without fill or outline
  push();
  translate(width / 2, height / 2);
  noFill();
  noStroke();
  textSize(600);
  text('W', 0, 0);
  pop();
}

class Outline {
  constructor() {
    this.size = 600;
    this.alpha = 255;
  }

  display() {
    push();
    translate(width / 2, height / 2);
    noFill();
    stroke(255, 140, 0, this.alpha);
    strokeWeight(2);
    textSize(this.size);
    text('W', 0, 0);
    pop();
  }

  update() {
    this.size += 5;
    this.alpha -= 5;
  }

  isOffCanvas() {
    return this.size > width || this.alpha <= 0;
  }
}
