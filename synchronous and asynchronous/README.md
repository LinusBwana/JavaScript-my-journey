# synchronous vs asynchronous
In this practice, I explored the difference between **synchronous** and **asynchronous** code execution in **JavaScript** using two simple examples. I used **`setTimeout()`** to simulate asynchronous behavior and compared it with the normal flow of synchronous execution.  
`Synchronous` executes line by line consecutively in a sequential manner, blocking the execution of the next line until the current line is completed.    
`Asynchronous` allow multiple operations to run concurrently, without blocking the execution of the next line.  

## I learnt this concept practically through the examples below.
### `Example 1: Basic Asynchronous Execution`  
In this example, I used *setTimeout()* to simulate an **asynchronous event** that runs after 3 seconds.  
I then logged *"Event 2", "Event 3"*, and *"Event 4"* immediately after that.  
I did this intentionally to **observe the execution order** of asynchronous code versus synchronous code in JavaScript.  
- I wanted to see if "Event 1" would block the others.
- By using *setTimeout()*, I was simulating a delayed task (like loading data or waiting for a user action).
- My goal was to understand how JavaScript handles non-blocking code execution.

#### Code
```javascript
setTimeout(() => console.log("Event 1"), 3000);

console.log("Event 2");
console.log("Event 3");
console.log("Event 4");
```

#### What Happened
When I ran the code:
- *"Event 2", "Event 3"*, and *"Event 4"* printed immediately.
- *"Event 1"* was delayed by 3 seconds because of the *setTimeout().*

#### Execution Order
```javascript
Event 2
Event 3
Event 4
Event 1  ← after 3 seconds
```

#### What I Learnt from example 1
- **JavaScript does not wait** for *setTimeout()* to finish before moving to the next line.
- This behavior proves that *setTimeout()* is **asynchronous**.
- Even though *setTimeout()* appears first, its callback is deferred to run later by the event loop.
- JavaScript keeps executing the next lines while the timer runs in the background.

### `Example 2: Using a Callback for Sequencing`  
In this example, I created two functions:  
- *function1*: Runs a *setTimeout()* with a 5-second delay and then executes a **callback**.
- *function2*: Contains three console logs for *Event 2, Event 3,* and* Event 4*.  

I passed *function2* as a **callback** to function1.  
I did this because I wanted more control over the order of execution in an asynchronous setting.  
Instead of letting JavaScript continue immediately (like in Example 1), I wanted to say:  
*“Hey, run this next function only after the first one completes.” * 
This helped me understand how **callbacks** can be used to **chain tasks** and maintain proper sequence in async code..

#### Code
```javascript
function function1(callback){
    setTimeout(() => {
        console.log("This is event 1");
        callback();
    }, 5000);
};

function function2(){
    console.log("This is event 2");
    console.log("This is event 3");
    console.log("This is event 4");
};

function1(function2);
```

#### What Happened
1. *function1* starts and sets a **5-second timeout**.
2. After the delay, "*This is event 1*" is printed.
3. Then the callback (*function2*) is executed.
4. *"This is event 2", "This is event 3"*, and *"This is event 4"* are printed in order.

#### Execution Order
```javascript
This is event 1  ← after 5 seconds
This is event 2
This is event 3
This is event 4
```

#### What I Learnt from example 2
- *setTimeout()* remains asynchronous even when I use a callback. The presence of a callback doesn’t make it synchronous.
- However, by placing the callback inside the timeout, I can control the flow and make certain tasks wait for others.
- This is useful when I want things to happen in a specific sequence.

## By building these two examples:
- I learnt the **difference between synchronous and asynchronous** execution.
- I saw that *setTimeout()* **is always asynchronous**, even when using callbacks.
- I understood that **callbacks** help control async behavior and order of execution.