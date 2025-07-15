# Promises
In this project, I explored how to use **Promises** in JavaScript to handle asynchronous operations in a cleaner, more readable way than traditional **callback hell**.

A `Promise` in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. Think of it like a placeholder for a value that’s not available yet but will be at some point.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Do something asynchronous...
});
```

A Promise has three states:  
**Pending** – The operation is still ongoing.  
**Fulfilled** – The operation completed successfully (resolve() was called).  
**Rejected** – The operation failed (reject() was called).  

We consume Promises using:  
*.then()* - for handling resolved values  
*.catch()* - for handling errors  
*.finally()* - (optional) runs regardless of success or failure  

---
### Why We Use Promises
---
Before Promises, we handled asynchronous operations using **nested callbacks**, which often led to **callback hell**, messy, unreadable, and error-prone code.

I used *Promises* in this project to:
- Structure asynchronous tasks in a linear, readable way.
- Avoid deeply nested callbacks.
- Handle success and failure scenarios clearly.

---
### What I Did
--- 
I created three separate asynchronous tasks, each returning a **Promise**:  
1. *walkDog(*) – resolves if the dog is walked.
2. *washClothes()* – resolves if clothes are washed, rejects otherwise.
3. *buyFood()* – resolves if food is bought.

Then I chained them together using *.then()* and handled errors with *.catch()*.

---
## Full Code:
```javascript
function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("I walked the dog");
            }
            else{
                reject("I did NOT walk the dog");
            } 
        }, 1500);
    })
};

function washClothes(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clothesWashed = false;
            if(clothesWashed){
                resolve("I washed my clothes");
            }
            else{
                reject("Clothes NOT washed");
            }
        }, 2500); 
    })
};

function buyFood(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const boughtFood = true;
            if(boughtFood){
                resolve("I bought food");
            }
            else{
                reject("Food NOT bought");
            } 
    }, 500);
    })
};

walkDog().then(value => {console.log(value);
                         return washClothes()})
         .then(value => {console.log(value); 
                         return buyFood()})
         .then(value => {console.log(value); 
                         console.log("All Work Completed")})
         .catch(error => {console.log(error)});
```
### Output
```javascript
I walked the dog
Clothes NOT washed
```
**Notice:** "*I bought food*" and "*All Work Completed*" are **not printed** because the chain stopped at the rejection.

---
## How It Works (Step-by-Step)
1. **I called** *walkDog()*, which returns a Promise.  
     - After 1.5 seconds, it resolves with `I walked the dog` because *dogWalked* is *true*.  
2. **I chained** *.then()* to it, which: 
     - Receives the success message from *walkDog*.  
     - Logs it to the console.  
     - Then calls w*ashClothes()*.  
3. In *washClothes()*, the Promise **rejects** after 2.5 seconds because *clothesWashed* is *false*.  
4. Since the Promise was rejected, **JavaScript skips the next** *.then()* and jumps directly to *.catch()*.  
5. *.catch()* receives the error message: `Clothes NOT washed` and logs it.  
6. The **remaining tasks are skipped**, and the program stops at the first failure. This is a core feature of Promises: **fail-fast behavior**.  

---
## What I Learnt
- How to define and return a **Promise** using *new Promise((resolve, reject) => { ... })*.
- How to use *.then()* to handle success and chain asynchronous operations.
- How to use *.catch()* to gracefully handle failures and avoid crashing the app.
- That Promises make asynchronous code **more readable and maintainable** compared to deeply nested callbacks.
- That Promises fail gracefully. Once a rejection happens, the rest of the chain is skipped.
- How different *setTimeout* durations still let JavaScript control the flow using the **event loop** and **callback queue**.

---
## Key Concepts
**Promise** - Represents a value that may be available in the future.  
**resolve()** - Called when the async task succeeds.  
**reject()** - Called when the async task fails.  
**.then()** - Runs when the promise is resolved.  
**.catch()** - Runs when the promise is rejected.  
**Chaining** - Linking .then() calls to run tasks sequentially.  
**Fail-Fast** - A rejected Promise skips the remaining *.then()* blocks.  