function TaskFour(x , y)
{
  if ((x == 3 || y == 3) && ( x + y == 3))
  return true;
  else
  return false;
}

var x = prompt ("Enter first number: ");
var y = prompt ("Enter second number: ");
var results = TaskFour(x , y);
console.log( results);