let c;

function setup () {

    colorMode(HSB,255)
    textSize(ourFont);


}

function draw() {

//     noStroke()

//     let ferb = map(mouseX, 0, 1000, 0, 255)
//     strokeWeight(5)
//     ellipse(mouseX, MouseY, 50)
//     console.log (ferb)
}

let ferb = map(mouseX, 0, 100, 0, 255)
fill(ferb, 255, 255)
textSize(mouseY/10)
text("HELLOW WORLD", 100, 100)

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}