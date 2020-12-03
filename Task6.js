function taskSix(x,y,z)
{
    var max = 0;
    
    if(x < y && z < y) {
        max = y;
    } 
    else if(z < x){
        max = x;
    } else {
        max = z;    
    }
    return max;
}

var x = prompt ("Enter first number: ");
var y = prompt ("Enter second number: ");
var z = prompt ("Enter third number: ");

console.log(TaskSix(x,y,z));
