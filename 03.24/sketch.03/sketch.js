let c;
let ourFont;
let profs = ["ali","diane","craig","nancy","roderick","sadie","richard"]
console.log(profs)
let points;


function preload() {
    ourFont = loadFont('AAHA.otf');
}

function setup() {
    c = createCanvas(1000,1000)

    
    colorMode(HSB,255);

    textSize(100)
    textFont(ourFont);
    
    points = ourFont.textToPoints("GD2",100,600,600);

    noStroke();
    
    
    for(let i=0; i<points.length; i++) {
        fill(random(255),255,255)
        rect(points[i].x+random(-5,5), points[i].y+random(-5,5),random(10,60))
        
    }

    


    

}

function draw() {

    
    
    
    // noFill()


    let ferb = map(mouseX, 0, 1000, 0, 255)
    // strokeWeight(5)
    fill(ferb,255,255)
    // ellipse(mouseX,mouseY,50)
    textSize(mouseY/10)
    
    
    // let i = 0;
    // while (i<profs.length) {
    //     text(profs[i], 100,(100*i+100))

    //     i=i+1;
    // }

    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}