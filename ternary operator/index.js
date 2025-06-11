// ternary operator - is a shortcut to if{} else {} statement that helps to assign a variable based on a condition
// condition ? codeIfTrue : codeeIFFalse

// example 1
/*
let age = 25;
let message = age>=18 ? "You are an adult" : "You are a minor";
console.log(message);
*/


// example 2

let time = 16;
let greeting = time<12 ? "Good Morning" : "Good afternoon";
console.log(greeting);


// example 3
let isStudent = false;
let message = isStudent ? "You are a student" : "You are not a student";
console.log(message);

// example 4
let purchaseAmount = 159
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is Ksh${purchaseAmount - (purchaseAmount * discount/100)}`);