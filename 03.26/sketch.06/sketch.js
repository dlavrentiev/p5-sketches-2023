let font;

function preload() {
  font = loadFont('Myriad.otf');
}

function setup() {
  createCanvas(1000, 1000);
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont(font);
}

function draw() {
  background(255);
  let textToDisplay = "A WIN IS A WIN";
  
  const textWidthVal = textWidth(textToDisplay);
  const textLeft = (width - textWidthVal) / 2;
  const textHeight = textSize();
  const textTop = (height - textHeight) / 2;

  let mouseXInTextBounds = mouseX > textLeft && mouseX < (textLeft + textWidthVal) && mouseY > textTop && mouseY < (textTop + textHeight);
  let runningTextWidth = 0;

  for (let i = 0; i < textToDisplay.length; i++) {
    const charWidth = textWidth(textToDisplay[i]);
    const charX = textLeft + runningTextWidth + charWidth / 2;

    if (textToDisplay[i] === 'W' || !mouseXInTextBounds) {
      text(textToDisplay[i], charX, height / 2);
    }
    runningTextWidth += charWidth;
  }
}

