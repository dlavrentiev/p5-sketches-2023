let rhombusesTop = [];
let rhombusesBottom = [];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);

  // Calculate the size and horizontal distance between rhombuses
  let size = 285;
  let xDistance = size / cos(45);

  // Create top rhombuses
  rhombusesTop.push(new Rhombus(width / 2 - xDistance / 2, 0, size));
  rhombusesTop.push(new Rhombus(width / 2 + xDistance / 2, 0, size));

  // Create bottom rhombuses
  rhombusesBottom.push(new Rhombus(width / 2, height, size));
  rhombusesBottom.push(new Rhombus(width / 2 - xDistance, height, size));
  rhombusesBottom.push(new Rhombus(width / 2 + xDistance, height, size));
}

function draw() {
  background(0);

  // Calculate the offsetY based on mouseY position
  let offsetY = map(mouseY, 0, height, 0, height / 5);

  // Draw top rhombuses
  for (let r of rhombusesTop) {
    r.update(offsetY);
    r.display();
  }

  // Draw bottom rhombuses
  for (let r of rhombusesBottom) {
    r.update(-offsetY);
    r.display();
  }
}

class Rhombus {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update(offsetY) {
    this.offsetY = offsetY;
  }

  display() {
    // Calculate colorValue based on offsetY
    let colorValue = map(abs(this.offsetY), 0, height / 3, 0, 255);
    fill(colorValue);
    noStroke(); // Remove stroke from the rhombus

    push();
    translate(this.x, this.y + this.offsetY);
    rotate(45);
    rect(0, 0, this.size, this.size);
    pop();
  }
}
