let c;

function setup () {
    c = createCanvas(1000,1000);
    background(3,50,200);
    rect(100,100,50,300)
}

// function draw() {
//     background(220);
//     rect(200,150,135,200);
//     rect(200,150,135,200);
//     rect(200,150,135,200);
//   }

function draw () {

    background(100,50,50)

    rect(50,50,mouseX,mouseY)
    noFill()
    strokeWeight(10)
    stroke(100,101,99)

}

function mousePressed() {
    saveCanvas (c, "03.15", "png");
}

