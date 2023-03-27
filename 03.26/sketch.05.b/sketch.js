let trianglesTop = [];
let trianglesBottom = [];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

  // Calculate the size and horizontal distance between triangles
  let size = 295;
  let xDistance = size * cos(0);

  // Create top triangles (upside-down)
  trianglesTop.push(new Triangle(width / 2 - xDistance / 2, 0, size, true));
  trianglesTop.push(new Triangle(width / 2 + xDistance / 2, 0, size, true));

  // Create bottom triangles
  trianglesBottom.push(new Triangle(width / 2, height, size));
  trianglesBottom.push(new Triangle(width / 2 - xDistance, height, size));
  trianglesBottom.push(new Triangle(width / 2 + xDistance, height, size));
}

function draw() {
  background(0);

  // Draw square behind
  fill(0, 0, 128); // Navy blue color
  rectMode(CENTER);
  rect(width / 2, height / 2, 585, 585);

  // Calculate the offsetY based on mouseY position
  let offsetY = map(mouseY, 0, height, 0, height / 3);

  // Draw top triangles
  for (let t of trianglesTop) {
    t.update(offsetY);
    t.display();
  }

  // Draw bottom triangles
  for (let t of trianglesBottom) {
    t.update(-offsetY);
    t.display();
  }
}

class Triangle {
  constructor(x, y, size, upsideDown = false) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.upsideDown = upsideDown;
  }

  update(offsetY) {
    this.offsetY = offsetY;
  }

  display() {
    // Calculate colorValue based on offsetY
    let colorValue = map(abs(this.offsetY), 0, height / 5, 0, 255);
    fill(colorValue);
    noStroke(); // Remove stroke from the triangle

    push();
    translate(this.x, this.y + this.offsetY);

    // Draw the triangle
    beginShape();
    if (this.upsideDown) {
      vertex(-this.size / 2, -this.size * sin(30) / 2);
      vertex(this.size / 2, -this.size * sin(30) / 2);
      vertex(0, this.size * sin(30) / 2);
    } else {
      vertex(-this.size / 2, this.size * sin(30) / 2);
      vertex(this.size / 2, this.size * sin(30) / 2);
      vertex(0, -this.size * sin(30) / 2);
    }
    endShape(CLOSE);

    pop();
  }
}
