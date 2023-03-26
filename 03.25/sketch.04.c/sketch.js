let angle = 0;
let fallen = false;
let strokes = [];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);

  for (let i = 0; i < 4; i++) {
    strokes.push({
      x1: random(width),
      y1: random(height),
      x2: random(width),
      y2: random(height),
    });
  }
}

function draw() {
  background(50, 80, 120);

  let w = 200;
  let h = 300;
  let scaleFactor = map(sin(angle), -1, 1, 0.5, 2);
  let rotationAngle = map(sin(angle), -1, 1, -90, 90);

  stroke(255, 215, 0); // Set stroke color to white
  strokeWeight(15);

  if (!fallen) {
    translate(width / 2, height / 2);
    push();
    scale(scaleFactor);
    rotate(rotationAngle);

    // Left slant
    line(-w / 2, -h / 2, -w / 4, h / 2);

    // Left-middle slant
    line(-w / 4, h / 2, 0, -h / 2);

    // Right-middle slant
    line(0, -h / 2, w / 4, h / 2);

    // Right slant
    line(w / 4, h / 2, w / 2, -h / 2);

    pop();
  // If the strokes have fallen, draw the individual strokes
} else {
  // Iterate through the strokes array
  for (let i = 0; i < strokes.length; i++) {
    // Draw a line using the stroke's start and end points
    line(strokes[i].x1, strokes[i].y1, strokes[i].x2, strokes[i].y2);
  }
}

// Update the angle for the "w" rotation
angle += 0.5;

// End of the draw() function
}

// Function that is called when the mouse is clicked
function mouseClicked() {
  // Toggle the fallen state (true to false or false to true)
  fallen = !fallen;

  // If the strokes are in the fallen state
  if (fallen) {
    // Iterate through the strokes array
    for (let i = 0; i < strokes.length; i++) {
      // Update the stroke's start and end points with new random values
      strokes[i] = {
        x1: random(width),
        y1: height,
        x2: random(width),
        y2: height + random(50, 150),
      };
    }
  }
  // End of the mouseClicked() function
}
