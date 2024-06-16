// Immediately Invoked Function Expression (IIFE)
//we don't want any pollution from the global scope so we create our own scope..
//also i want that vo function immediately invoke ho jaye..

// kuch ni karna bas pure function ko hi () mai wrap kar dena hai 

(function chai(){  //also this is named IIFE
    console.log("DB connected");
})(); //ye semicolan is important here.. cuz ye function imediately invoke to ho gyi but context rokna kahan hai.. isko ye nahi pta... 
//tabhi iske baad agar mai dusrsa iife function run karta hu.. vo nahi chalega...

(()=>{
    console.log("Db connected");
})();

//now if i want to pass any parameter to iife function i'll do it like this..
 ((name)=>{
    console.log(`Hi mate, My name is ${name}`)
 })("Sagy");

 ((num1, num2)=>{
    console.log(`Hi mate, My name is ${num1 + num2}`)
 })(4,7);