// Declare variables
let customFont;
let gridSize = 12;
let cellSize;
let whiteCells;
let frameCounter = 0;
let transitionSpeed = 60; // Speed of transition between multiply effect and white cells

// Preload custom font
function preload() {
  customFont = loadFont('Myriad.otf');
}

// Setup canvas and initial settings
function setup() {
  createCanvas(1000, 1000);
  textFont(customFont);
  textSize(1000);
  textAlign(CENTER, CENTER);
  cellSize = width / gridSize;
  whiteCells = generateWhiteCells();
}

// Main drawing loop
function draw() {
  background(255, 255, 0); // Set background to neon yellow

  // Draw the text first
  fill(255, 0, 0); // Set text color to bright red
  text('W', width / 2, height / 2 - 100);

  // Then draw the grid on top of the text
  drawGrid();

  // Increment frame counter and reset if necessary
  frameCounter++;
  if (frameCounter >= transitionSpeed) {
    frameCounter = 0;
  }
}

// Draw the grid and white squares with multiply effect
function drawGrid() {
  // Draw the grid lines
  stroke(255);
  for (let i = 0; i <= gridSize; i++) {
    line(i * cellSize, 0, i * cellSize, height);
    line(0, i * cellSize, width, i * cellSize);
  }
  
  // Draw the cells
  noStroke();
  for (const cell of whiteCells) {
    // Apply multiply effect to cells based on the multiply property and frameCounter
    if (cell.multiply && frameCounter < transitionSpeed / 2) {
      blendMode(MULTIPLY);
      fill(0, 255, 0, 127); // Semi-transparent green color
    } else {
      blendMode(NORMAL);
      fill(255); // White color
    }
    rect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  }
  blendMode(NORMAL); // Reset blend mode after drawing grid
}

// Generate random white squares with multiply effect
function generateWhiteCells() {
  const cells = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    if (random() < 0.5) {
      cells.push({ x: i % gridSize, y: floor(i / gridSize), multiply: random() < 0.5 });
    }
  }
  return cells;
}
