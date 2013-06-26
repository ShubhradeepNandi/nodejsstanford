#!/usr/bin/env node
var fibonacci = function(n){
if(n<1){ return 0;}
else if(n == 2 || n==1){ return 1;}
else {return (fibonacci(n-1)+ fibonacci(n-2));} };

var seriesfib = function(k){
var arr = [];
for(var i = 0; i < k; i++)
{
  arr.push(fibonacci(i));
}
return arr;
};

var fmt = function(arr){
return arr.join(";");
};

console.log(fmt(seriesfib(10)));
