const marvels = ["thor","ironamn","spiderman"];
const dc = ["superamn","flash","batman"];

// marvels.push(dc); // it will push as a array 
// console.log(marvels[3]);


const myconcat = marvels.concat(dc); // it will concat the values 
console.log(myconcat); 

//spread opeartor

let allarray = [...marvels,...dc];
console.log(allarray);


console.log(Array.isArray("Naresh")); // it is checking it is array are not

// to convert to array

console.log(Array.from("Naresh")); //if we use from it convert string to array 

console.log(Array.from({name:"Naresh"}));  // interesting


let score1 = 15;
let score2 = 20;
let score3 = 23;

const myNew = Array.of(score1,score2,score3);
console.log(myNew);