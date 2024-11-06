// DATES 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

//Declaring dates using objects

let myCreateedDate = new Date(2024,0,23);
console.log(myCreateedDate.toDateString());

//YY-MM-DD form
let myCreateedDate1 = new Date("2024-01-26");
console.log(myCreateedDate1.toLocaleString());

let timeStamp = Date.now();
console.log(Math.floor(Date.now()/1000)); // it will give milliseconds to covert seconds use this formula

console.log(myCreateedDate.getTime()); // comparing date and timeStamp

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


