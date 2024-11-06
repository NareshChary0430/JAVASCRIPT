const score  = 400;
console.log(score);

const Balance = new Number(100); // this how to number using object
console.log(Balance);

console.log(Balance.toString().length);
console.log(Balance.toFixed(2)); // after the how fix some decimal value
console.log(typeof Balance);


const anotherNumber = 23.6767;
console.log(anotherNumber.toPrecision(2)); 

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')); // this will convert us dollar to indian standard number 

// ++++++++++++++++++++++++++  MATHS ++++++++++++++++++++++++++++++++++++++++//

//MATH BULITIN FUNCTION 

console.log(Math.max(30,40));
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.3)); //if it less than 5 it will convert the value to floor value
console.log(Math.round(4.6)); // if it greater than 5 it will convert to ceil value

// bulit in ceill and floor

console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));

//random function 

console.log(Math.random()); //this will give random number

console.log(Math.floor(Math.random()*10)+1);




