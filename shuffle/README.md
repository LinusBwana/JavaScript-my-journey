# shuffle using Fisher-Yates algorithm
In this practice, I used the **Fisher–Yates Shuffle** because it is an efficient algorithm to randomly shuffle an array in place so that every possible order is equally likely.
Instead of just picking random items with *Math.random()* and pushing them into a new array (which can result in **biased or duplicate selections**), Fisher–Yates ensures a uniform and fair shuffle by swapping items progressively from the end of the array.

## I practiced shuffle using Fisher-Yates algorithm as illustrated below:
```javascript
const cards = ["Q", 1, 8, "A", 3, 6, "J", 4, 8, "K", 9, 10, 5, 2];

shuffle(cards);
console.log(cards);


function shuffle(array){
    for(let i = array.length - 1; i > 0 ; i--){
        const randomNum = Math.floor(Math.random() * (i+1)) ;
        
       [ array[i], array[randomNum]] = [array[randomNum], array[i]];
    };
};
```

### Console Ouput
####
```javascript
[9, 'J', 1, 4, 3, 6, 5, 2, 'Q', 8, 8, 'A', 'K', 10]
```
## Why I used Fisher–Yates
I wanted to shuffle a deck of cards (cards[]) such that each card appears **once and only once**, in **a different order every time**.  
Using plain *Math.random()* without structure could:  
- Cause duplicate entries.
- Miss out some cards.
- Bias the randomness.

So I implemented Fisher–Yates, which avoids all of that by working in place, without extra memory, and with **fair probability**.

## What I learnt from the examples above
- I deepened my understanding on how destructuring assignment lets us swap array values concisely as illustrated below:
```javascript
[a, b] = [b, a];
```
- I understood why generating a random index and swapping is more reliable than picking random values.
- I practiced using *Math.floor(Math.random() * (i + 1))* to safely get a random number within bounds.
- I discovered that even if a *randomNum* repeats, the **value at that index may have changed**, so every swap still works as intended.