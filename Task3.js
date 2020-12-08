function taskThree(x , y)
{
  if (x == 65 || y == 65 ||  x + y == 65)
  return true;
  else
  return false;
}

var x = prompt ("Enter first number: ");
var y = prompt ("Enter second number: ");
var results = taskThree(x , y);
console.log( results);
