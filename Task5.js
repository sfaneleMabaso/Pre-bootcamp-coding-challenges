function TaskFive(x,y,z)
{
  var s = (x+y+z)/ 2;
  var area =Math.sqrt(s*((s-x)*(s-y)*(s-z)));
  return area;
}

var x = prompt ("Enter first number: ");
var y = prompt ("Enter second number: ");
var z = prompt ("Enter third number: ");

console.log(TaskFive(x,y,z));
//console.log(A);
