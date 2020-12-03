function toFahrenheit(celsius) 
{
  var c = celsius;
  var convert = c * 9 / 5 + 32;
  
  var text = c+' in Fahrenheit is  ' + convert;
  
   return console.log(text);
}

function toCelsius(fahrenheit) 
{
  var f = fahrenheit;
  
  var convert = (f - 32 ) *5 / 9;
  
  var text = f+' in Celsius is  ' + convert;
  
   return console.log(text);
} 

var cel = prompt (" Enter temperature in Celsius: ");

var fah = prompt (" Enter temperature in Fahrenheit: "); 

console.log(ToFahrenheit(cel));

console.log(ToCelsius(fah));
