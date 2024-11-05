const name = "sai";
const repo = 50;

console.log(name+repo);


//string interpulation

console.log(`Hello my name is ${name} and my repo count is ${repo}`)

// another way of declaring string is create a object
const gameName = new String("Naresh");
console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);



//Methods

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3)); // to check index 
console.log(gameName.indexOf('e')); // to check character
console.log(gameName.substring(2,4));

//slicing
const newString = gameName.substring(0,4);
console.log(newString);  // both substirng and slice will give same output

const anotherString = gameName.slice(0,4);
console.log(anotherString); // we can give negative indexing

const anotherString1 = gameName.slice(-8,4);
console.log(anotherString1);
 


// TRIM and REPLACE
const newStringOne = "      naresh     ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim remove the extra spaces 

//replace
const url = "https://naresh/nareshcharysai"
console.log(url.replace("naresh","saichary"));

console.log(url.includes("naresh"));