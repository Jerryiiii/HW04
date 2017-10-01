var x1 = 169
var x2 = 171
var y = 0

while(x1>=0){
  
  line (x1,y,x2,y)
  x1 = x1 - 10
  x2 = x2 + 10
  y = y + 10
}
while (x1<= 170){
  line (x1,y,x2,y)
 x1 = x1 + 10
  x2 = x2 - 10
  y = y + 10
}
