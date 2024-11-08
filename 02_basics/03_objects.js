// singleton
// Object.create



//object literals


const mySym = Symbol("key1");

const myUser = {
    name :"Naresh",
    "fullName" : "NARESHCHARY", //we cannot access using dot 
    age : 28,
    [mySym]: "mykey1",
    location : "Hyderabad",
    email : "Naresh300@GMAIL.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],

}

console.log(myUser.email);
console.log(myUser["name"]);
console.log(myUser["fullName"]);
console.log(typeof myUser[mySym]);

myUser.email = "nareshchari300@gmail.com";
console.log(myUser["email"]);

// Object.freeze(myUser); // it will used to you dont to change anything 
myUser.email = "Nareshcahry500@gmail.com";
console.log(myUser["email"]);

console.log(myUser);

// USING FUNCTION

myUser.greeting = function(){
    console.log("Hello Naresh");
}

myUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(myUser.greeting());
console.log(myUser.greetingTwo());


