var current = 4;
var count = 2;
var check = true;
var primes = new Array();
var math = require('mathjs');
primes[0]=2;
primes[1]=3;
var test ="";
while(check)
{

var isPrime = true;
var sqrt = math.sqrt(current);
var ceil = math.ceil(sqrt);
var floor = math.floor(sqrt);
if(ceil == floor)
{
  current = current + 1;
}
for(var i=2; i<=ceil; i++)
{

  if(current % i == 0)
 {
   isPrime=false;  

   break;
 }
 }
 if(isPrime == true){
   primes[count] = current;
   count = count+1;
 }
 current = current + 1;

if(count == 100)
{

 check = false;
}
}

for(var j=0; j<primes.length;j++)
{
 test = test.concat(primes[j]);
  if(j != 99)
 {
   test = test.concat(";");
  }
}



var fs = require('fs');
fs.writeFileSync("primenumbers.txt",test);
