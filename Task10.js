function taskTen(s) {
  
var vowels = 'aeiouAEIOU'


 for(var i = 0; i < s.length ; i++)
  {
    if (vowels.indexOf(s[i]) !== -1)
    {
      console.log(s[i])
    }
  }
  
}
var str = prompt ( "Enter your String: ");

taskTen(str);
   
     
