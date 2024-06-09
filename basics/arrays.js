//array

// const myArr= [0,1,2,3,4,5,6];
// const myHeros = ["Rahulk","Naagraj"];

// const myArr2 = new Array(1,2,3,4);
// //console.log(myArr[4]);

// //Array methods:
// myArr.push(10);  //end mai element edd kr diya
// myArr.pop(); //removes the lastv element.. no parameter needed
// myArr.unshift(50); //adds the element in the front of the array.. downside is that sare elements array k gets shifted to right.. teadious task
// myArr.shift(); //removes the 1st element

// //console.log(myArr.includes(2)); //checks if the element exists in the array or not..
// //console.log(myArr.lastIndexOf(80));//returns the element's index 

// const newArr = myArr.join(); //converts the array into a string..

// // slice, splice

// console.log("A ",myArr);

// const myNewArr = myArr.slice(1,3); //excludes the last element 
// console.log(myNewArr);
// console.log("B ",myArr); 

// const myNewArr2 = myArr.splice(1,3);//includes the last element too but alson changes the original array!

// console.log(myNewArr2);

// console.log("C ",myArr); //ab yahan jaise original array mai se elements hi hat gaye hai after splice!! 

//day 2 more of arrays..

const marvel = ["thor","iron man","Spiderman", "Captian America","Hawk eye"];
const dc = ["Batman","Superman","Jocker","Flash"]

//marvel.push(dc);
//console.log(marvel);
//console.log(marvel[5][2]);
//even if i use concat the result is the same..
const newVar = marvel.concat(dc);
//console.log(newVar); // here concat does not make changes to the original array instead it makes a new one!! 
//console.log("I am doing Good!!");
//console.log(marvel);

//spread it's syntax is: [...arr1,...arr2,.....so on]; har ek element ko unique kr diya


const all_heroes = [...marvel,...dc];
//console.log(all_heroes);


//flat function..

const another_array = [2,3,4,5,[56,45,46,467,3],45,67,[564,566,354,3,[34,57,66,8,[5,6,7,0,0]],78],677,9];
//console.log(another_array.flat(3));


//Arrays for webscraping..
console.log(Array.isArray("Sagy"));
console.log(Array.from("Sagy")); // array ban jayega from se
console.log(Array.from({name:"Sagy"})); //intresting figure it out

//when you have lots of variables or arrays hai and u need to convert them into an array.. 

let score1 = 78;
let score2 = 88;
let score3 = "sagy";
console.log(Array.of(score1,score2,score3));