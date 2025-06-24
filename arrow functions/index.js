// arrow functions provide a concise way to write function expressions. They are good for simple functions that we can use only once
// (parameter) => some code

// example 1
const hello = () => console.log("Hello friend")
hello();

// example 2
const arrowFunction = (name, age) => console.log(`My name is ${name} and I am ${age} years old`)
arrowFunction("Linus", 29);

// example 3
setTimeout(() => console.log("timeout"), 3000);

// example 4
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const evenNums = numbers.filter((element) => element % 2 ===0);
const total = numbers.reduce((accumulator, element) => accumulator + element)
console.log(squares);
console.log(evenNums);
console.log(total);