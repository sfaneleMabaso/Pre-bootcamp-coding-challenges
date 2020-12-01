var x = 0;
  for ( var i = 0; i < 1000 ; i++)
  {
    if ( i % 3 == 0)
    x = x + i;
    else if ( i % 5 == 0)
    x = x + i;
  }
console.log(" The sum of all the multiples of 3 or 5 below 1000 is: " + x);