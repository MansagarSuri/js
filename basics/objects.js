//singleton: made when objects are declared using constructeor way.. and not object literals..
//Object.create
//object literals
//symbol
const mySym = Symbol("key1");

const jsUsers = {
    "full name": "sagy",
    age: 1,
    location: "USA",
    [mySym]:"hihihihihi",//symbol ko hamesha [] kr k use karna hota hai!!
    email: "sagy123@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Tuesday","Wednesday"]
}
//object can be accessed in two ways:
// console.log(jsUsers.email);
// console.log(jsUsers["email"]);//this way is better cuz agr object ki key mai space ho to . wala nahi chalta
// console.log(jsUsers["full name"]);
// console.log([mySym]);

//to change a value of object..
jsUsers.email = "mansagar@google.com";
//console.log(jsUsers["email"]);  //email got overwrite..

//to freeze an object so that nothing can be changed in it..
// Object.freeze(jsUsers);
jsUsers.email = "mansagar124@google.com";

//in js functions can also be treated as 

jsUsers.greetings = function(){
    console.log("Hi there User");
}
jsUsers.greetings2 = function(){
    console.log(`Hi there User ${jsUsers.email}`); //string interpolation
}

//2. I can use the keyword this !! to refer to current object....-> console.log(`Hi there User ${this.email}`);


// console.log(jsUsers.greetings());
// console.log(jsUsers.greetings); //function execute nahi hua hai function ka reference aaya hai..
// console.log(jsUsers.greetings2());

//--------------------------------------------
//NOW declare OBJECTS with the help of constructor or singleton
//const tinderUser = new Object();//a singleton object
const tinderUser={};
tinderUser.id = "23abc";
tinderUser.name = "Sagy";
tinderUser.gender= "Male";
tinderUser.age = 324;
//console.log(tinderUser);

const regularUser ={
    email : "abc@gmail.com",
    fullname:{
        firstName: "Sagy",
        lastName: "Suri"
    }
}
//console.log(regularUser.fullname.firstName);
//optional chaining..
//console.log(regularUser.fullname?.firstName);

//merging objects..
const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e",6:"f",7:"i"};
const obj4 = {6:"a",7:"b",8:"c"};
//const obj3 = {obj1,obj2};
//const obj3 = Object.assign({},obj1,obj2,obj4);
//BUT MOSTLY I'LL USE spread operator...
const obj3 = {...obj1,...obj2,...obj4};

//console.log(obj3);

//while working with database.. we genrally have to work upon array of objects.. [{},{},{}....]
const user =[
    {
        id: 1,
        email: "abbc@gmail.com"
    },
    {
        id: 2,
        email: "bsdjc@gmail.com"
    },
    {
        id: 3,
        age: 48,
        email: "bc@gmail.com"
    }
]
user[1].email;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //returns an array of keys..
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('fname'));

//------------------------------------------------------
// //DESTRUCTING of objects..
// const course ={
//     Name : "DSA",
//     fullname:{
//         firstName: "DATA",
//         lastName: "STructure and Algorithm"
//     },
//     price: 999
// }
// //console.log(course.price);
// const {price} = course; //deconstruction of an object
// console.log(price);
// const {fullname:{lastName}}= course; //
// console.log(lastName);
const university = {
    name: "Tech University",
    location: {
        city: "Tech City",
        address: {
            street: "Tech Street",
            building: {
                name: "Tech Building",
                floor: {
                    number: 3,
                    room: {
                        number: 301,
                        name: "Computer Science Lab"
                    }
                }
            }
        }
    },
    departments: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"]
};

const {location:{address}}= university;
console.log(city);