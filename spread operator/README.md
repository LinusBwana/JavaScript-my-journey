## Spread operator 
Spread operator (...) allows an iterable such as an array or string to be expanded into seperate elements (unpacking the elements) in places where zero or more elements or key-value pairs are expected. 

### Common Use Cases:
Copying arrays or objects without reference.  
Merging arrays or objects.  
Expanding arrays into arguments (e.g. Math.max(...array)).  
Converting strings into arrays of characters.  

## I practiced using the spread operator with the examples below:

```javascript
// example 1
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers)

console.log(minimum);
console.log(maximum);
```
### Explanation
Math.max() and Math.min() do not accept arrays directly, but with ..., the array becomes individual arguments.

### 
```javascript
// example 2
let userName = "Linus Bwana";
let letters = [...userName];
let joinedLetters = [...userName].join("");

console.log(letters);
console.log(joinedLetters);
```
### Explanation
A string is iterable, so spread breaks it into an array of characters. .join("") puts it back together.

### 
```javascript
// example 3
let fruits = ["apple", "mango", "banana", "pineapple"];
let newFruits = [...fruits]
let vegetables = ["carrots", "potatoes", "spinach"];
let foods = [...fruits, ...vegetables, "eggs"] 

console.log(newFruits);
console.log(foods);
```
### Explanation
Spread operator creates new arrays instead of referencing the old ones, and combines multiple arrays easily.

### Key takeaway
The spread operator is a powerful, clean, and readable way to unpack values from arrays or objects and is commonly used in copying, merging, and transforming data structures in JavaScript.