//Array is a data structure we can store any type of datatypes

//Deep copy and shallow copy 

const myArray = [1,3,4,5,6,7];
console.log(myArray);

console.log(myArray[0]);

let myHeros = ["alice","shaktiman","captain"];
console.log(myHeros);

const myArray2 = new Array(1,2,3,4,5); //using object 
console.log(myArray2);


// Array Methods

myArray.push(10);
myArray.pop() // it will directly delete last element from the from the array
console.log(myArray);

myArray.unshift(9); // it will add element to frist in the array
myArray.shift() // it will remove first element from the array
console.log(myArray);

console.log(myArray.includes(6)); // it will booolean valuue
console.log(myArray.indexOf(6)); // it will check the value and return the index of that value

// join convert to String

const myNew = myArray.join()
console.log(myNew);

//slice and splice

console.log("A :", myArray); // original Array

const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B :", myArray); // after slicing 

const myn2 = myArray.splice(1,3); 
console.log(myn2);
console.log("C :", myArray); // in the splice it will remove that particular portion