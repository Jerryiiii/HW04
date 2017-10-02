background(255)
var a = 0
strokeWeight(20)
while(a <=height/2) {
  line(0,a,width,a)
  a = a + 40
}
var y = a - 30
var b = 0
while (b <= width){
  line (b,y,b, height)
  b = b + 40
}
