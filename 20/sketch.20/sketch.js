let textColor; // define a variable to hold the text color

function setup() {
  createCanvas(1000, 1000);
  setGradient(random(255), random(255), random(255), random(255), random(255), random(255)); // set random gradient background
  textSize(300);
  textFont('Zapfino');
  textAlign(CENTER, CENTER);
  textColor = color('#000000'); // set initial text color to black
  text('w', width/2, height/2);
}

function draw() {
  if (mouseIsOver()) { // check if mouse is over text
    textColor = color(random(255), random(255), random(255)); // set random text color
  }
  fill(textColor); // set text color
  text('w', width/2, height/2);
}

function mouseIsOver() {
  let d = dist(mouseX, mouseY, width/2, height/2); // calculate distance between mouse and text center
  return d < 150; // return true if distance is less than text radius
}

function setGradient(r1, g1, b1, r2, g2, b2) {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(r1, g1, b1), color(r2, g2, b2), inter);
    stroke(c);
    line(0, y, width, y);
  }
}
