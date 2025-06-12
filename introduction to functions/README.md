## Introduction to JavaScript functions:  
In JavaScript, a function is a reusable block of code designed to perform a specific task. Functions help keep code organized, readable, and avoid repetition. We declare it once and use it whenever we want. We call the function to execute the code.

### Syntax:
```javascript
function functionName(parameters) {
  // Code to run
  return value; // (optional)
}
functionName(arguments); // Function call
```

### Example 1: Simple Addition Function
```javascript
function add(x,y){
    return x + y;
}
console.log(add(8,3));
```

### Example 2: mail Validation with Ternary Operator
```javascript
function isValidEmail(email){
    return email.includes("@") ? true : false;   
}
console.log(isValidEmail("Linus@gmail.com"));
```

## Explantion for the above examples:
### Example 1: Simple Addition Function
Defines a function *add(x, y)* with parameters *x* and *y*.  
These parameters receive arguments *8* and *3* when the function is called using *add(8, 3)*.  
The function returns their sum, and *11* is logged to the console.   

### Example 2: Email Validation with Ternary Operator
Defines a function *isValidEmail(email)* with one parameter *email*.  
It checks if the provided argument contains an *"@"* symbol using the *includes()* method.  
A *ternary operator* is used to return *true* if it includes *"@",* or *false* otherwise.   
Calling *isValidEmail("Linus@gmail.com")* returns *true*.

## Key Takeaways:
I learned how to define and call JavaScript functions using parameters and arguments.  
I also practiced using the ternary operator for simple conditional checks inside a function.