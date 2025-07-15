# callback hell
This project demonstrates how JavaScript handles **asynchronous execution** using *setTimeout, callbacks*, and the event loop with a focus on understanding **callback hell**.

`Callback hell` happens when multiple asynchronous functions are nested inside each other, forming a deeply indented, hard-to-read structure. It typically looks like this:

```javascript
doSomething(() => {
  doSomethingElse(() => {
    anotherThing(() => {
      // and so on...
    });
  });
});
```

In this project, I intentionally created *callback hell* by chaining four tasks (*task1, task2, task3, task4*) using **nested callbacks** with *setTimeout*. The goal was to reinforce my understanding on how asynchronous execution works and how callbacks are managed in JavaScript.

## Why Callback Hell is Bad Practice
- Hard to read, maintain, and debug.
- Increases the chance of bugs, especially in error handling.
- Doesn't scale well with more complex logic.

✅ Instead of callback hell, modern JavaScript encourages using Promises or async/await, which offer cleaner, flatter, and more readable asynchronous code.

---

## What I did
I created a series of four **asynchronous functions:** *task1, task2, task3,* and *task4*. Each function uses *setTimeout* to simulate a delay and then calls a *callback function* to trigger the next task. This creates the *callback hell* structure on purpose.

---

## Code
```javascript
function task1(callback){
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 2000);
};

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 1000);
};

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 1500);
};

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 completed");
        callback();
    }, 500);
};

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks are completed")
            });
        });
    });
});
```
### Output (With Delays)
```javascript
Task 1 completed   // after 2s
Task 2 completed   // after 1s (3s total)
Task 3 completed   // after 1.5s (4.5s total)
Task 4 completed   // after 0.5s (5s total)
All tasks are completed
```
---

## How It Works
### Synchronous vs Asynchronous
`Synchronous code` runs in sequence, blocking everything until the current task finishes.  
`Asynchronous code` runs in the background and allows other code to execute without waiting.  

Here, I used setTimeout to simulate asynchronous behavior by delaying execution of each task.

### setTimeout
- *setTimeout(fn, delay)* is a browser/Web API function that takes a callback and a delay (in milliseconds).
- It doesn’t block the code. Instead, it tells the browser: “Hey, run this function after X milliseconds.”
- The callback function is sent to the **Timer Queue**, not the **call stack** directly.
- The function waits there until the **call stack** is clear.

### Event Loop, Call Stack & Timer Queue
Here’s what happens under the hood:
- When *task1* is called, *setTimeout* tells the browser: “Run this callback in 2000ms.”
- The *callback* is registered and the main thread continues executing, it is **asynchronous behavior**.
- After *2000ms*, the *callback* is placed in the **Timer Queue**.
- The Event Loop checks if the **Call Stack** is empty.
- If it is, it moves the callback to the **Call Stack** to execute.
- If not, it waits.
- This process repeats for *task2, task3,* and *task4*, one after the other, using *nested callbacks*.
- Each task is scheduled and waits in the *Timer Queue*. The Event Loop ensures they are pushed to the **Call Stack** only when the stack is empty, which prevents blocking.

---
## What I Learnt
- How JavaScript handles **asynchronous behavior** using *setTimeout*.
- The difference between **synchronous** and **asynchronous execution**.
- The role of *callbacks* in managing flow in asynchronous operations.
- The role of the **call stack**, **timer queue**, and the **event loop** in JavaScript’s concurrency model.
- Why **callback hell** happens.
- Why callback chaining (**callback hell**) can make code harder to manage, and how `Promises or async/await` are cleaner alternatives.

## Key Concepts
`Callback`- A function passed to another function to be called later.  
`Asynchronous` - Runs independently in the background, doesn't block code.  
`Synchronous` - Runs step by step, blocking execution until done.  
`Call Stack` - Where code runs. Only one thing at a time.  
`Timer Queue` - Where delayed callbacks wait before execution.  
`Event Loop` - Continuously checks if the call stack is empty and moves queued functions into it.  
`Callback Hell` - A deeply nested structure of callbacks that makes code hard to read and maintain.  