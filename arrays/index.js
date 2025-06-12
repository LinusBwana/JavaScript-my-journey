// an array is a variable like structure that can hold more that 1 value

let fruits = ["apple", "orange", "mango", "strawberry"];

fruits[2] = "coconut";

// Remove from the beginning
fruits.shift();

// Add to the beginning
fruits.unshift("watermelon")

// Add item to the end
fruits.push("banana", "pineapple");

// Remove last item
fruits.pop();

// Get length
let numOfFruits = fruits.length;
let index = fruits.indexOf("orange");

console.log(fruits[0]);
console.log(numOfFruits);
console.log(index);
console.log(fruits);

// looping through an array
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// shortcut
for(let fruit of fruits){
    console.log(fruit);
}

// looping in reverse
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}