
// const user = {
//     username: "Sagy",
//     price: 890,

//     welcomeMessage : function() {
//         console.log(`${this.username} , welcome to website..`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username ="Mansagar";
// user.welcomeMessage();

// console.log(this);//empty object!! but when w'll run in browser.. window object will be returned..(browser k liye global object is window object!!)

//khali function mai agr this use karenge to undefined aayega!!
// 1.
// function abc(){
//     let name = "sagr";
//     console.log(this.name); //is giving undefined ..so this works in object..
// }
// abc();
//2.
// const chai2 = function(){
//     let name = "sagr";
//     console.log(this.name);
// }
// chai2();

// //3.
// const chai2 =()=>{
//     let name = "sagr";
//     console.log(this.name);
// }
// chai2();


//---------------------------

//Arrow functions..   Explicit return.. return keyword lagana padta hai
const add = (num1,num2)=>{  //basic arrow function
    return num1 + num2;
}
//implicit return
const add2 = (num1,num2)=>  (num1 + num2);
console.log(add2(2,5));

//and if i wish to return an object.. then i need to wrap that object around () brackets..
const func = ()=>  ({name: "Mansagrr", Age: 23});
console.log(func());