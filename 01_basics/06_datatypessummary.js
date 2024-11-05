// primitive 

// 7 types call by value

// String , Number , Boolean , null , undefined , Symbol , Bigint
 
//Dynamically typed language

const score = 100;
const scoreValue = 100.33;
const isLoggedIn = false;
const ousideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // id of both symbol are always different 

const bigNumber = 123154313516n; // if we want to convert number to bigint we have put n to the number
console.log(bigNumber);
console.log(typeof bigNumber);






//Reference type(non primitive)

// 3 types

// Arrays , objects , Functions , 

const heros = ["prabhas","vijay","alluarjun"];

let user = {
    name : "Naresh",
    age:22,
};

const myFunction = Function() // we can store function into variable
{
    console.log("Hello Naresh")
}

 
console.log(typeof heros);  // object
console.log(typeof user); // object
console.log(typeof myFunction); // Function object