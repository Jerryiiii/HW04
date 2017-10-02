colorMode(HSB);
background(358,89,78);
stroke(353,68,56)
strokeWeight(3)
var a = 0
while(a<=width){
  line (0,a,width,a)
  a = a + 10
}
yourPatch (width/2, height/2)

function yourPatch(x, y){
	stroke(358,89,78)  
	strokeWeight (3)
	fill(358,89,78);
	ellipse(width/2,height/2,200,200)
	strokeWeight(2)
  stroke(36,59,99)
	var a = -99
  var b1 = 5
  var b2 = -5
	while(a<=100){
    line (x+a, y+b1,x+a, y+b2)
  a = a + 10
  b1= +Math.sqrt(10000 - a*a)
  b2= -Math.sqrt(10000 - a*a)
  
  }
 var c = 99
  var d1 = 5
  var d2 = -5
   line (x+c, y+d1,x+c, y+d2)
}
