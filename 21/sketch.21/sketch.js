let font;
let letterW;
let xoff = 0;

function preload() {
  font = loadFont('Zapfino.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  letterW = font.textToPoints('W', 200, 500, 260);
}

function draw() {
  background(0);

  fill(255);
  noStroke();

  for (let i = 0; i < letterW.length; i++) {
    let p = letterW[i];
    let x = p.x + map(noise(xoff + p.y * 0.01), 0, 1, -5, 5);
    let y = p.y + map(noise(xoff + p.x * 0.01), 0, 1, -5, 5);

    let r = map(noise(xoff + (p.x + p.y) * 0.01), 0, 1, 0, 255);
    let g = map(noise(xoff + (p.x - p.y) * 0.01), 0, 1, 0, 255);
    let b = map(noise(xoff + (p.y - p.x) * 0.01), 0, 1, 0, 255);

    fill(r, g, b);
    ellipse(x, y, 3, 3);
  }

  xoff += 0.01;
}
