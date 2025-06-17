## Callback
A callback function is a function passed as an argument to another function. It allows us to execute a function after another one finishes or at a specific point inside it. JavaScript uses this for asynchronous operations such as reading a file, network requests, interacting with databases, event handling, and function customization.

### I practiced callbacks using the examples below:
### Example 1:
```javascript
goodBye(hello);
leave();

function hello(){
    console.log("Hello");
};

function leave(){
    console.log("Leave");
};

function goodBye(callback){
    console.log("Good Bye");
    callback()
};
```

### How It Works:
*goodBye(hello)* is called:  
It logs *"Good Bye"*.  
Then it calls the *callback()* → which is *hello()*, so it logs *"Hello"*.  
*leave()* is called next and logs *"Leave"*.

### What I Practiced:
- Passing a **named function** as a callback (*hello*)  
- Callback executed inside another function (*goodBye*)  
- Execution order and function invocation  

### Example 2:
```javascript
sum(renderResult, 8, 7);

function sum(callback, a, b){
    answer = a + b;
    callback(answer);
};

function renderResult(answer){
    const myH1 =  document.getElementById("myH1");
    myH1.textContent = answer;
};
```

### What I Practiced:
- I passed a *function (renderResult)* and data (8, 7) into another *function (sum)*.
- *sum()* performs the logic, then delegates the display/output to *renderResult()*. 

### How It Works:  
1. The function *sum* is called with three arguments:
- A *callback function*: renderResult
- Two numbers: *8* and *7* 
2. Inside the *sum* function:
- a + b equals 15, so answer = 15
- *callback(answer)* becomes *renderResult(15)*. This passes the result to the callback
3. The renderResult function:
- It selects the HTML element with the ID *"myH1"*
- Then updates its text content to display the value *15*

## What I learnt:
- How to pass functions as arguments
- That functions can be executed from inside other functions
- How to handle logic (sum) and rendering (DOM updates) separately using callbacks
- Callback functions help create modular, reusable, and clean code
- That hoisting allows us to call declared functions before their definitions

## Take away
Callbacks let me separate logic from behavior. One function can do the job, and another can decide what to do with the result making code easier to reuse, extend, and read. I also reinforced that in JavaScript, functions are first-class citizens they can be passed around like variables.

