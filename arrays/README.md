## Arrays 
I have learnt that an array in JavaScript is a special variable that holds a list of items (elements), such as numbers, strings, or even other arrays. They allow us to store, access, and manipulate data efficiently using indices that start at 0.

### Array Syntax
```javascript
let arrayName = [item1, item2, item3, ...];
```

### I learnt arrays by coming up with with the code below  
```javascript
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
```

### Code Explanation
I learnt common array operations as explained below:  
I declared an array *fruits* with several fruit names.  
Replaces *"mango"* with *"coconut"* by accessing index *2*.  
Uses *.shift()* to remove the first item and *.unshift()* to add a new item at the beginning.  
Adds multiple items *("banana", "pineapple")* to the end with *.push()*, and removes the last one using *.pop()*.  
Retrieves the array length with *.length* and finds the index of *"orange"* using .*indexOf()*.  
It prints the first item, total number of items, the index of *"orange"*, and the entire array.  

Then it demonstrates three different ways to loop through the array:  
1. A standard for loop  
2. A for...of loop for cleaner iteration  
3. A reverse loop to display the items backward   

### Key takeaway
Arrays store multiple values in one variable.  
Elements are accessed by their index (starting from 0).  
JavaScript provides useful **built-in methods** like *.push(), .pop(), .shift(), .unshift(), .length(), and .forEach()* to manipulate and interact with arrays.  
Arrays can hold any data type i.e strings, numbers, booleans, even other arrays (nested arrays).  