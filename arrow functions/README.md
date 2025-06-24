# arrow functions
arrow functions provide a concise way to write function expressions. They are good for simple functions that we can use only once  
(parameter) => some code

## Basic Syntax
```javascript
const functionName = (parameters) => {
  // code block
};
```

## I practiced arrow functions using the examples below:
### Example 1:
```javascript
const hello = () => console.log("Hello friend")
hello();
```

### Example 2:
```javascript
const arrowFunction = (name, age) => console.log(`My name is ${name} and I am ${age} years old`)
arrowFunction("Linus", 29);
```

### Example 3:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const evenNums = numbers.filter((element) => element % 2 ===0);
const total = numbers.reduce((accumulator, element) => accumulator + element)
console.log(squares);
console.log(evenNums);
console.log(total);
```

#### What I learnt:  
How to write and use arrow functions with:  
- No parameters  
- One or multiple parameters  
- Implicit vs. explicit return  

How to use arrow functions as callback functions in:  
- setTimeout  
- Array methods like .map(), .filter(), and .reduce()  