// var

function varExample() {
  console.log(x); // undefined (hoisted)
  var x = 5;
  
  if (true) {
    var x = 10; // Same variable! No block scope
    console.log(x); // 10
  }
  
  console.log(x); // 10 (modified by if block)
}

// Problem: var ignores blocks
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 3, 3, 3 (all share same 'i')


// let (Block-Scoped Variables)

function letExample() {
  // console.log(x); // ReferenceError: Cannot access before initialization
  let x = 5;
  
  if (true) {
    let x = 10; // Different variable (block-scoped)
    console.log(x); // 10
  }
  
  console.log(x); // 5 (original variable unchanged)
  x = 15; // Reassignment allowed
  console.log(x); // 15
}

// Useful in loops
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 0, 1, 2 (each iteration has own 'i')

// Practical use case
let userScore = 0;
userScore += 10; // Can update
userScore = 50;  // Can reassign


// const (Block-Scoped Constants)

function constExample() {
  const x = 5;
  // x = 10; // TypeError: Assignment to constant variable
  
  // const y; // SyntaxError: Missing initializer
  
  if (true) {
    const x = 10; // Different variable (block-scoped)
    console.log(x); // 10
  }
  
  console.log(x); // 5
}

// Important: const with objects/arrays
const user = { name: 'Alice', age: 25 };
user.age = 26; // OK - modifying properties
user.city = 'NYC'; // OK - adding properties
console.log(user); // { name: 'Alice', age: 26, city: 'NYC' }

// user = {}; // TypeError: Assignment to constant

const numbers = [1, 2, 3];
numbers.push(4); // OK - modifying array
numbers[0] = 10; // OK
console.log(numbers); // [10, 2, 3, 4]

// numbers = []; // TypeError: Assignment to constant

// Practical use cases
const API_URL = 'https://api.example.com';
const MAX_ATTEMPTS = 3;
const config = { timeout: 5000, retries: 3 };