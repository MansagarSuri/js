let score = true;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); //converting the string into a number
console.log(typeof valueInNumber);  //type is number 
console.log(valueInNumber); //but the value after conversion is NaN

//notes: 
//"33" -> 33
// "33aed" -> NaN
// true -> 1
//false -> 0
//1 -> true
//0 -> false

let isLoggendIn = 1;

let ValueAfterConversion = Boolean(isLoggendIn);

console.log(ValueAfterConversion);
//---------Operations------------
