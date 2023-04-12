function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(255, 255, 204); // Light yellow background
  let radius = width * 1.5;

  //drag to move the world.
  orbitControl();

  // Draw the letter "W" using boxes
  push();
  translate(-50, -100, 0);
  box(30, 200, 30);
  pop();

  push();
  translate(0, -50, 0);
  rotateZ(PI / 6);
  box(30, 150, 30);
  pop();

  push();
  translate(50, -50, 0);
  rotateZ(-PI / 6);
  box(30, 150, 30);
  pop();

  push();
  translate(100, -100, 0);
  box(30, 200, 30);
  pop();

  normalMaterial();
  translate(0, 0, -600);
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      if (j % 2 === 0) {
        cone(30, 30);
      } else {
        box(30, 30, 30);
      }
      pop();
    }
  }
}


// Original code source: https://p5js.org/examples/3d-orbit-control.html