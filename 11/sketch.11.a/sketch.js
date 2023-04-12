// Declare variables
let customFont;
let gridSize = 9;
let cellSize;
let whiteCells;
let message;

// Preload custom font
function preload() {
  customFont = loadFont('FREEFATFONT.otf');
}

// Setup canvas and initial settings
function setup() {
  createCanvas(1000, 1000);
  textFont(customFont);
  textSize(1000);
  textAlign(CENTER, CENTER);
  cellSize = width / gridSize;
  whiteCells = generateWhiteCells();
  message = document.getElementById('message');
}

// Main drawing loop
function draw() {
  background(0, 0, 255); // Set background to mid-blue

  // Draw the text first
  fill(0, 255, 0); // Set text color to lime green
  text('W', width / 2, height / 2 - 100);

  // Then draw the grid on top of the text
  drawGrid();
}

// Draw the grid and white squares
function drawGrid() {
  stroke(255);
  for (let i = 0; i <= gridSize; i++) {
    line(i * cellSize, 0, i * cellSize, height);
    line(0, i * cellSize, width, i * cellSize);
  }
  noStroke();
  fill(255);
  for (const cell of whiteCells) {
    rect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  }
}

// Generate random white squares
function generateWhiteCells() {
  const cells = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    if (random() < 0.5) {
      cells.push({ x: i % gridSize, y: floor(i / gridSize) });
    }
  }
  return cells;
}

// Detect mouse click and update white squares
function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    whiteCells = generateWhiteCells();
    if (message) {
      message.style.display = 'none';
      message = null;
    }
  }
}