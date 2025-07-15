# Async/Await
In this part of the project, I refactored my 🔗[**original Promise-based**](https://github.com/LinusBwana/JavaScript-my-journey/tree/main/promises) task flow using JavaScript's *async/await* **syntax**.  
I initially implemented the logic using *.then()* chaining and *.catch()* for error handling to understand how **Promises** work. Then, I rewrote the same logic using *async/await* to achieve a cleaner, more synchronous-looking structure, which is easier to read and maintain, especially as the number of tasks grows.


**async** is a keyword you put in front of a function to tell JavaScript:  
- "This function will return a Promise, even if it looks like normal code."  

**await** is used inside an async function to wait for a Promise to resolve.  
- It pauses execution at that line until the Promise settles, then returns the value.  

### Why I Switched to Async/Await
- I wanted to make my asynchronous code easier to follow *.then()* chaining can quickly become messy.
- I wanted to **avoid nested functions** and make the code flow top to bottom, like synchronous code.
- I also wanted to use *try...catch* for error handling instead of *.catch()* at the bottom of a chain.  

By using *async/await*, I was able to achieve all of this without changing the underlying logic of how Promises work.


## My Updated Code Using Async/Await:
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


async function dailyTasks() {

    try{
        const dog = await walkDog();
        console.log(dog);

        const clothes = await washClothes();
        console.log(clothes);

        const food = await buyFood();
        console.log(food);

        console.log("All Work Completed");
    }
    catch(error){
        console.error(error);
    }

};

dailyTasks();
```

### Expected Output
If all tasks succeed:
```javascript
I walked the dog
I washed my clothes
I bought food
All Work Completed
```

### Output for the code above
If one task (like washing clothes) fails:
```javascript
I walked the dog
Clothes NOT washed
```
Execution stops immediately at the error and jumps to the catch block. This is known as **fail-fast behavior**.

## What I Did and Why
- **I create**d an *async* function called *dailyTasks()* which allows me to use *await* inside it.
- **I used** *await* before each *Promise* (*walkDog, washClothes, buyFood*) so that each one waits for the previous to finish.
- **I wrapped the code** in a *try...catch* **block** so that if **any Promise fails**, I can catch the error and prevent the rest from running.
- **I replaced** *.then()* **chaining** with clean, linear code, which made it easier for me to follow the logic.

## What I Learnt
- I learnt that *async/await* is just a **nicer way to write Promises**. It doesn’t do anything new, it just makes the code easier to read.
- I found that using *await* makes my code **look like normal step-by-step code**, even though it’s still asynchronous in the background.
- I learnt how to **wait for a task to finish** before moving to the next one by using the *await* keyword.
- I used a *try...catch* block to **catch errors** when something goes wrong, instead of using *.catch()* like I did with **Promises**.
- My code became **cleaner and easier to follow**, especially when working with many tasks that depend on each other.