const score = 400;
//console.log(score);

const balance = new Number(100); // making an Number object 
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));  //to have a precision value with two decimals

const otherNumber = 123.556;
//console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
//console.log(hundreds.toLocaleString("en-IN"));

//----------------Maths-------------------

// console.log(Math); //Math is an object
// console.log(Math.abs(-5));
// console.log(Math.round(89.67));
// console.log(Math.ceil(9.2));
// console.log(Math.floor(7.9));
// console.log(Math.sqrt(3).toPrecision(3));
// console.log(Math.min(34,45,7,8,3,2));
// console.log(Math.max(34,45,7,8,3,2));

console.log(Math.floor(Math.random()*10) + 1);
 
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1))+min);