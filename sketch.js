// slide to see how detailY works
let detailY;
function setup() {
  createCanvas(100, 100, WEBGL);
  detailY = createSlider(3, 16, 3);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  background(205, 102, 94);
  rotateY(millis() / 1000);
  torus(30, 15, 16, detailY.value());
}