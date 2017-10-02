background(240)
strokeWeight(0.1)
line (0,7*height/8,7*width/8,0)
line (0,7*height/8+height/2,7*width/8+ width/2,0)           
line(width/4,0,width/4,height)
line(3*width/4,0,3*width/4,height)
line(0,height/4,width,height/4)
line(0,3*height/4,width,3*height/4)

var a = 0
while (a<=height){
  line (width/4,a, 3*width/4,a)
  a = a + 2
}
var b = 0
line(0,height/4,width,height/4)
line(0,3*height/4,width,3*height/4)
while (b<=width){
  line (b,height/4, b,3*height/4)
  b = b + 2
}
var c = 0
var d = 0
while (c<=width) {
  line(c,7*height/8+d,c,7*height/8+height/2+d)
  c = c + 2 
  d = d - 2
}
