# JavaScript Variable Declarations: var, let, and const

A comprehensive guide to understanding `var`, `let`, and `const` in JavaScript, including the Temporal Dead Zone (TDZ) concept.

---

## Table of Contents
- [Overview](#overview)
- [var (Legacy)](#var-legacy)
- [let (Block-Scoped Variables)](#let-block-scoped-variables)
- [const (Block-Scoped Constants)](#const-block-scoped-constants)
- [Temporal Dead Zone (TDZ)](#temporal-dead-zone-tdz)
- [Key Differences](#key-differences)
- [Best Practices](#best-practices)

---

## Overview

JavaScript provides three ways to declare variables: `var`, `let`, and `const`. Understanding their differences is crucial for writing clean, bug-free code.

---

## var (Legacy)

### Definition
Function-scoped or globally-scoped variable declaration from early JavaScript.

### Key Characteristics
- **Function-scoped** (ignores block scope)
- Can be **redeclared**
- **Hoisted** to top of scope (initialized as `undefined`)
- Creates property on global object when declared globally

### When to Use
❌ **You shouldn't use `var` in modern JavaScript.** It's maintained only for backward compatibility.

### Example

```javascript
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
```

---

## let (Block-Scoped Variables)

### Definition
Block-scoped variable that can be reassigned.

### Key Characteristics
- **Block-scoped** (respects `{}`)
- **Cannot be redeclared** in same scope
- Hoisted but in **"temporal dead zone"** until declaration
- **Can be reassigned**

### When to Use
✅ When you need a variable whose value will change.

### Example

```javascript
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
```

---

## const (Block-Scoped Constants)

### Definition
Block-scoped variable that cannot be reassigned (but object properties can be modified).

### Key Characteristics
- **Block-scoped** (respects `{}`)
- **Cannot be redeclared or reassigned**
- **Must be initialized** at declaration
- For objects/arrays, the **reference is constant** but contents can change

### When to Use
✅ **Default choice for most variables.** Use when you don't need to reassign the variable.

### Example

```javascript
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
```

---

## Temporal Dead Zone (TDZ)

### What is TDZ?

The **Temporal Dead Zone (TDZ)** is the period between when a variable is hoisted and when it is actually initialized in the code. During this period, you cannot access the variable, or JavaScript throws a `ReferenceError`.

### How TDZ Works

For `let` and `const`:
1. They are **hoisted** (JavaScript knows they exist)
2. BUT they are **not initialized**
3. Until the line of code where they are assigned a value, they stay in the **TDZ**
4. If you try to access them in this zone → ❌ `ReferenceError`

### TDZ Example

```javascript
console.log(a);  // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a);  // ✔ 10
```

**What happens internally:**
1. JavaScript hoists `a` (it knows `a` exists)
2. TDZ starts at the beginning of the scope
3. When the code reaches `let a = 10`, TDZ ends
4. After that, you can use `a`

### TDZ Does NOT Happen with var

```javascript
console.log(x); // ✔ undefined
var x = 5;
```

`var` is hoisted and initialized as `undefined`, so accessing it early doesn't throw an error.

### Why Does TDZ Exist?

It prevents common bugs caused by using variables before they are ready.

**Example with Shadowing:**

```javascript
let price = 100;

function calculate() {
    console.log(price); // ❌ ReferenceError due to TDZ
    let price = 50;
}

calculate();
```

**Why the error happens:**
- Inside `calculate()`, the local `let price = 50` creates a new local variable
- This local `price` **shadows** (overrides) the outer `price`
- BUT the local `price` is in the TDZ until its declaration line
- When `console.log(price)` tries to use it, it's still in TDZ → Error!

### Without Redeclaration (No TDZ)

```javascript
let price = 100;

function calculate() {
    console.log(price); // ✔ 100 (from outer scope)
}

calculate();
```

**Why this works:**
- No local `price` inside `calculate()`
- JavaScript looks outward and finds `price = 100`
- No TDZ issue → value prints normally

### TDZ Summary Table

| Scenario | Result |
|----------|--------|
| No redeclaration in function | ✔ Uses outer variable |
| Redeclaration with `let` or `const` | ❌ TDZ error (before initialization) |
| Redeclaration with `var` | ✔ Works (shows `undefined` because var is hoisted) |

---

## Key Differences

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function/Global | Block | Block |
| **Redeclaration** | ✓ Allowed | ✗ Error | ✗ Error |
| **Reassignment** | ✓ Allowed | ✓ Allowed | ✗ Error |
| **Hoisting** | Yes (as undefined) | Yes (TDZ) | Yes (TDZ) |
| **Must Initialize** | No | No | Yes |
| **TDZ** | No | Yes | Yes |

---

## Best Practices

### Modern JavaScript Pattern

1. **Default to `const`** - Use for all variables unless you know they need to change
2. **Use `let` when reassignment is needed** - Counters, accumulators, swap operations
3. **Never use `var`** - Causes unexpected bugs due to function scoping

### Example of Good Modern JavaScript

```javascript
// Good modern JavaScript pattern
const userName = 'John';
const items = [];

for (let i = 0; i < 5; i++) {  // let for loop counter
  items.push(i);
}

let total = 0;  // let because it changes
items.forEach(item => {
  total += item;
});

console.log(total); // 10
```

---