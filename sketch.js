let xpos = 0;
let ypos = 0;
//let pause = false; 
var score = 0;

function setup() {
  frameRate(80)
  createCanvas(windowWidth,windowHeight);
  noCursor()
}
function draw() {
  background(111,179,156);
  
  textSize(30)
  textAlign(CENTER)
  text('Catch the Ball!', 650, 25)
  textSize(20)
  text('Click to Score!', 650, 50)
  
  let x1 = 650+sin(xpos)*550;
  let y1 = 500+sin(ypos)*300;
  let x2 = mouseX;
  let y2 = mouseY;
 
  stroke(255);
  textSize(45)
  fill(255,218,209)
  ellipse(x1,y1,15);
  xpos += 0.04;
  ypos += 0.03;
  noFill()
  strokeWeight(1)
circle(x2, y2, 75);
  fill(255,218,209)
  textFont('Courier New')
  textSize(20)
  strokeWeight(0)
  text("Score: " + score, 520, 58, 255);
    let d = dist(x1, y1, x2, y2);
  if (d < 75 && mouseIsPressed){
       score += 0.5;
}
}
  
// function mousePressed(){
//   if(pause==false){
//     noLoop();
//     pause=true;

//   }else{
//     loop();
//     pause = false;
//   }
// }