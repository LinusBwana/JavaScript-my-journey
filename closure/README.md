# closures
- In JavaScript, **closures** are functions defined inside another function. The inner fucntion has access to the variables and scope of the outer function. Occur when a function is able to "remember" and access variables from its **outer scope**, even after that outer function has finished executing.  
- To better understand closures, I worked on the three examples below. Each demonstrates how inner functions can retain access to variables from an enclosing function which allows us to maintain private data, manage state, and create reusable logic. 

## I practiced closures using the examples below:
### Example 1:
I created a function *outer()* with a local variable `message`. Inside it, I defined another function *inner()* that logs the message. I then called *inner()* from inside *outer()* to demonstrate that *inner()* can access message, even though message is declared in *outer()'s* scope.
```javascript
function outer(){

    message = "This is outer";
    
    function inner(){
        console.log(message);
    };

    inner();

};

outer();
```

#### Console Ouput
```javascript
outer();                       // Output: This is outer
```

### Example 2:
I created a counter factory function *createCounter()* that encapsulates a *count* variable. I returned two functions: *increment()* (which increases the count and logs it) and *getCount()* (which returns the current count). I used closure here so count is **private** but still accessible to those returned functions.
```javascript
function createCounter(){
    let count = 0;

    function increment(){
        count ++;
        console.log(`New counts is: ${count}`);
    };

    function getCount(){
        return count;
    };

    return {increment, getCount};
};

const counter =  createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is: ${counter.getCount()}`); 
```

#### Console Ouput
```javascript
counter.increment();           // Output: New counts is: 1
counter.increment();           // Output: New counts is: 2
counter.increment();           // Output: New counts is: 3
counter.increment();           // Output: New counts is: 4
counter.increment();           // Output: New counts is: 5
console.log(`The current count is: ${counter.getCount()}`);
// Output: The current count is: 5

```

### Example 3:
I made a function *createGame()* to manage a game score using closures. It maintains a private *score* variable and returns three functions: *increaseScore(), decreaseScore(),* and *getScore()*. These inner functions modify or access *score*, demonstrating closure by retaining access to score even after *createGame()* returns.
```javascript
function createGame(){
    score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    };

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    };

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
};

const game = createGame();

game.increaseScore(7);
game.increaseScore(9);
game.decreaseScore(5);
console.log(`Final score is: ${game.getScore()}`);
```

#### Console Ouput
```javascript
game.increaseScore(7);         // Output: +7pts
game.increaseScore(9);         // Output: +9pts
game.decreaseScore(5);         // Output: -5pts
console.log(`Final score is: ${game.getScore()}`);
// Output: Final score is: 11
```

## What I learnt from the examples
1. Closures allow inner functions to "remember" variables from their outer function even after that function has returned.
2. I can use closures to keep variables *private* and *persistent*, as shown with count in the counter and score in the game.
3. JavaScript’s function scope and closures provide a powerful way to build encapsulated logic.