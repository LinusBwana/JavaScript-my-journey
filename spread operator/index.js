// spread operator (...) allows an iterable such as an array or string to be expanded into seperate elements. Unpack the elements

// example 1
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers)

console.log(minimum);
console.log(maximum);


// example 2
let userName = "Linus Bwana";
let letters = [...userName];
let joinedLetters = [...userName].join("");

console.log(letters);
console.log(joinedLetters);


// example 3
let fruits = ["apple", "mango", "banana", "pineapple"];
let newFruits = [...fruits]
let vegetables = ["carrots", "potatoes", "spinach"];
let foods = [...fruits, ...vegetables, "eggs"] 

console.log(newFruits);
console.log(foods);
