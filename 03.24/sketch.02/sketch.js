// function setup () {
//     createCanvas(800,800);
//     angleMode(DEGREES);
//     rectMode(CENTER);
// }

// function draw() {
//     background(220);

//     push(0);
//     translate(350, 400);
//     rotate(60);
//     fill(255, 100, 50);
//     rect(0, 0, 250, 75);
//     pop(0);

//     stroke(255);
//     rotate(60);
//     line(175, 400, 250, 50);


// }

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    rectMode(CENTER);
  }
  
  function draw() {
    background(220);
  
    // First rectangle (left part of the W)
    push();
    translate(250, 400);
    rotate(-30);
    fill(255, 100, 50);
    rect(0, 0, 75, 250);
    pop();
  
    // Second rectangle (right part of the W)
    push();
    translate(550, 400);
    rotate(30);
    fill(255, 100, 50);
    rect(0, 0, 75, 250);
    pop();
  
   
  }
  