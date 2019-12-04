var capture;
var myTv;

//colors
var col1 = "#e6ffe6";
var col2 = "#8c8cd9";
var col3;
var col4 = "#cc4400";
var col5 = "#fff0b3";
var col6 = "#665200";


function preload() {
  myTv = loadImage('assets/tv.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(col2));
  noStroke();

  col3 = color(10);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

}

function draw() {

  //pattern with the mouse
  fill(col6)
  ellipse(mouseX, mouseY, 200);
  fill(col5)
  ellipse(mouseX, mouseY, 150);
  fill(col4)
  ellipse(mouseX, mouseY, 100);

  //image from the video
  image(capture, width / 2, height / 2, 640, 480);
  imageMode(CENTER);

  //tv frame
  push()
  imageMode(CENTER);
  image(myTv, width / 2 + 20, height / 2 - 80, 800, 720);
  pop()

  //turn on and off the filter
  if (keyIsDown(ENTER)) {
    addFilter();
  }

  //text
  push()
  var myText = "Keep 'enter' pressed to go back to 70's";
  drawingContext.font = "50px Yesteryear";
  drawingContext.textAlign = "center";
  fill(color(col1));
  text(myText, width / 2, height / 2 + 400);
  pop()

}

function addFilter() {
  filter(GRAY);

  // grid of points with opacity
  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      col3.setAlpha(100);
      fill(color(col3));
      ellipse(x, y, 8);
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
