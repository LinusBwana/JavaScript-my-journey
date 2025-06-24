# Function expression
function expression - a way of defining a function as a variable or value

## I practiced function expression using the examples below:

### Example 1 – Assigned to a Variable
```javascript
const hello = function(){
    console.log("Hello there");
};
hello();
```

#### Final output:
```javascript
Hello there
```

#### What This Code Does:
Stores a function in the variable *hello*.  
Calls the function by using *hello()*. 

### Example 2: Passed as a Parameter
```javascript
const numbers = [1, 2, 3 , 4, 5, 6, 8, 9, 10, 11, 12]; 
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);
```

#### Final output:
```javascript
[2, 4, 6, 8, 10, 12]
```

#### What This Code Does:
function passed as a parameter to *.filter()*  
Anonymous function used as a *callback*  
*.filter()* takes this function and uses it to test each element in the numbers array.

## What I Learned:
Function expressions allow us to:  
- Store functions in variables.  
- Pass them as arguments.  
- Use them inside array methods like .map(), .filter(), .reduce(), and setTimeout().