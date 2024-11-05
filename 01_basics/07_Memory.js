// STACK (PRIMITIVE)  // here we will get copy of that variable

//HEAP (NON-PRIMITIVE) // here we will get original varaible 


// Example for stack memory

let myName = "Naresh";

let anotherName = myName;

anotherName = "sai";

console.log(anotherName);
console.log(myName);

//Example for Heap memory

let userOne = {
    email : "Naresh23@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "sai@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);