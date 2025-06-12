## Variable scope:  
Variable scope is where a variable is recognized and accessible (local vs global)

### Example 1: Simple Addition Function:
```javascript
let x = 5; // this is a global variable

function function1(){
    console.log(x);
    console.log(y); //will return an error because y has been declared in function2 hence visible and accessible inside function2 only
};

function function2(){
    let x = 3; //this is a local variable - the local variable is given a priority
    let y = 4; //this is a local variable - only visible and accessible wuth function2
    console.log(x);
    console.log(y);
};

function1();
function2();
```

## Explantion for the above example:
My code illustrates **JavaScript variable scope:**  
*x = 5* is a **global variable.**  
*function1()* logs the global *x*, but throws an error when trying to access *y*, since *y* is only defined inside *function2()*.  
In function2(), a new *local variable x = 3* is declared using let, which shadows the *global x*. Therefore, it *logs 3 (not 5) and y = 4*, both of which are local to the function.

## Key Takeaways:
I learnt how JavaScript handles variable scope i.e., local variables override global ones when they share the same name. This helped me understand how naming conflicts can affect program behavior and why it's important to manage variable declarations carefully inside functions.