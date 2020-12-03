function taskEleven(s1, s2)
{
  var arr= [];
//Checks which string is shorter  
  var longest;
  var shortest;
  
  if(s1.length < s2.length){
    shortest = s1;
    longest = s2;
  }else{
    shortest = s2;
    longest = s1;
  }
  
  // checking duplicates
  for (var i = 0; i< shortest.length; i++)
  {
   if (longest.indexOf(shortest[i]) !== -1 && arr.indexOf(shortest[i]) === -1)
   {
    arr.push(shortest[i]);
   }
  }
  return arr.join("");
}

var s1 = prompt ("Enter your first string: ");
var s2 = prompt ("Enter your second string: ");

console.log(TaskEleven(s1,s2));

