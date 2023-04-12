let font;

function preload() {
  font = loadFont('Myriad.otf');
}

function setup() {
  createCanvas(1000, 1000); 
  textAlign(CENTER, CENTER); // Set the text alignment to center
  textFont(font); // Set the font to the custom one loaded in preload()
}

function draw() {
  background(0, 0, 255); // Set the background color to blue

  let fontSize = 500;
  textSize(fontSize);

  let textX = width / 2; // Calculate the x-coordinate for the center of the canvas
  let textY = height / 2; // Calculate the y-coordinate for the center of the canvas

  // Map mouseY position to starWeight (between 1 and 5)
  let starWeight = map(mouseY, 0, height, 1, 5);

  // Draw the text as stars with the specified fontSize and starWeight
  drawStarsText('W', textX, textY, fontSize, starWeight);
}

// Draw the text as stars at the specified position, size, and weight
function drawStarsText(txt, x, y, fontSize, starWeight) {
  // Obtain an array of points representing the outline of the text
  let points = font.textToPoints(txt, 0, 0, fontSize, { sampleFactor: 0.1 });

  // Translate the canvas to the center of the text
  push();
  translate(x - font.textBounds(txt, 0, 0, fontSize).w / 2, y);

  // Draw a star at each point in the outline of the text
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    strokeWeight(starWeight); // Set the stroke weight for the star
    stroke(255); // Set the star color to white
    drawStar(pt.x, pt.y, 2 * starWeight, 4 * starWeight, 5);
  }
  pop(); // Restore the original canvas state
}

// Draw a star at the specified position, with the specified inner and outer radius, and number of points
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints; // Calculate the angle between each point of the star
  let halfAngle = angle / 2.0; // Calculate the half angle

  // Draw the star shape
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE); // Close the shape to create a complete star
}

