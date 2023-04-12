function setup() {
  createCanvas(1000, 1000); // Set canvas size to 1000x1000 pixels
  textAlign(CENTER, CENTER);

  // Set up the shadow properties
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';

  // Set white background
  background(255);
}

function draw() {
  for (let i = 0; i < 12; i++) {
    let x = random(width); // Random x position
    let y = random(height); // Random y position
    let size = random(12, 50); // Random size between 50 and 250
    let r = random(255); // Random red value between 0 and 255
    let g = random(255); // Random green value between 0 and 255
    let b = random(255); // Random blue value between 0 and 255

    textSize(size);
    fill(r, g, b); // Set the text color to the random RGB value
    text("W", x, y);

    // Calculate an amount to change brightness based on proximity to the mouse
    let maxdist = 50;
    let d = dist(x, y, mouseX, mouseY);
    let adjustbrightness = (255 * (maxdist - d)) / maxdist;

    // Convert the fill color to HSB format to change brightness
    let hsb = RGBToHSB(r, g, b);
    let h = hsb[0];
    let s = hsb[1];
    let br = hsb[2];
    br += adjustbrightness;
    br = constrain(br, 0, 255);
    let newRGB = HSBToRGB(h, s, br);

    // Set the text color to the new RGB value
    fill(newRGB[0], newRGB[1], newRGB[2]);
  }
}

// Helper function to convert RGB color to HSB color
function RGBToHSB(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let maxVal = Math.max(r, g, b);
  let minVal = Math.min(r, g, b);
  let delta = maxVal - minVal;
  let h, s, bVal = maxVal;
  if (delta == 0) {
    h = 0;
    s = 0;
  } else {
    s = delta / maxVal;
    if (r == maxVal) {
      h = (g - b) / delta;
    } else if (g == maxVal) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
  }
  return [h, s * 100, bVal * 100];
}

// Helper function to convert HSB color to RGB color
function HSBToRGB(h, s, b) {
  h /= 360
  s /= 100;
  b /= 100;

  let c = b * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = b - c;

  let r, g, bVal;
  if (h < 60) {
    r = c;
    g = x;
    bVal = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    bVal = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    bVal = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    bVal = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    bVal = c;
  } else {
    r = c;
    g = 0;
    bVal = x;
  }

  r = (r + m) * 255;
  g = (g + m) * 255;
  bVal = (bVal + m) * 255;

  return [r, g, bVal];
}

// Original code source: https://p5js.org/reference/#/p5/drawingContext https://p5js.org/examples/color-brightness.html