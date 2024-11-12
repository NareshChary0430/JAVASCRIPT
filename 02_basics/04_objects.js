//const tinderUser = new Object() 
// this is a singlethon object

const tinderUser= {} // non-singlethon object 
tinderUser.id = "1";
tinderUser.name = "Naresh";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


const regularUser = {
    email : "user2@gmail.com",
    fullname : {
        userFullName :{
            firstName : "Naresh",
            lastName : "Chary"
        }
    }
}

console.log(regularUser.fullname.userFullName);


const obj1 = {1:"a",2:"b"};
const obj2 = {2:"c",3:"d"};

const obj3 = Object.assign({},obj1,obj2);
const obj4 = {...obj1,...obj2};


console.log(obj3);
console.log(obj4);


