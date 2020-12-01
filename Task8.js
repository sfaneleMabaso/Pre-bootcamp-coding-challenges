function TaskEight (x)
{
 
  var hours = Math.floor(x / 60);  
  
  var minutes = x % 60;
  
  return hours + "  hours " + minutes + " minutes.";         
  
}

var num = prompt (" Enter number to convert: ");
console.log(TaskEight(num));