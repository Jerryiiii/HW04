var h = 0;
function setup() { 
 background(255);
noStroke();
} 
function draw() { 
	 background(255);
  colorMode(HSB);
  fill(h, 100, 100);
  ellipse(width/2, height/2, 100, 100);
  h = h + 5;
  
  if (h >= 360) {
    h = 0;
  }
}
