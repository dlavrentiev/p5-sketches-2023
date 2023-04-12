let gridSize = 40;
let circleSize;
let circleSizeMax;
let customFont;
let mask;

function preload() {
  customFont = loadFont('Myriad.otf');
}

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  circleSize = min(width, height) / (gridSize * 3.5);
  circleSizeMax = circleSize * 5;

  // Create a mask for the letter "W"
  mask = createGraphics(width, height);
  mask.textFont(customFont);
  mask.textSize(width / 1.5);
  mask.textAlign(CENTER, CENTER);
  mask.fill(255);
  mask.text("W", width / 2, height / 2 - height / 4);
}

function draw() {
  background(200);
  let mouseDistMax = dist(0, 0, width, height) / 3; // Reduce the range of the color transition

  // Draw circles only inside the letter "W"
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = map(i, 0, gridSize - 1, circleSize, width - circleSize);
      let y = map(j, 0, gridSize - 1, circleSize, height - circleSize);

      let d = dist(x, y, mouseX, mouseY);
      let scaleFactor = map(d, 0, mouseDistMax, circleSizeMax, circleSize);

      let fillColor = map(d, 0, mouseDistMax, 255, 0); // Map the distance to the color value (255 for white, 0 for black)
      fill(fillColor);

      // Check if the current position is inside the letter "W"
      if (mask.get(x, y)[0] === 255) {
        ellipse(x, y, scaleFactor, scaleFactor);
      }
    }
  }
}
