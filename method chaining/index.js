// method chaining is calling one method after another in one continous line of code

// example1: NO METHOD CHAINING
let userName = "liNuS BwANa";
/*
userName = userName.trim();
userName = userName.replace(" ", "");

let firstChar = userName.charAt(0);
firstChar = firstChar.toUpperCase();

let otherChars = userName.slice(1);
otherChars = otherChars.toLowerCase();

userName = firstChar + otherChars;

console.log(userName);
*/


// example2: WITH METHOD CHAINING
userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase().replace(" ","");
console.log(userName);