const accountId = 14553;
let accountEmail = "naresh@gmail.com";
var accountPassword = "12345";
accountCity = "Hyderabad";
let accountState; //if we cannot declare any value to varibale it should be consider as undefined


//accountId = 2; //not allowed
console.log(accountId); 

accountEmail = "sai300@gmail.com";
accountPassword = "123142";
accountCity = "Chennai";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of issuse in block scope and functional scope

*/

