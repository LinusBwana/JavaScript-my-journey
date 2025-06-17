## Dice Roller
This is a simple web-based Dice Roller built with **HTML**, **CSS**, and **JavaScript**.
 

### 
```javascript
const diceInput = document.getElementById("diceInput");
const diceImages = document.getElementById("diceImages");
const diceResults = document.getElementById("diceResults");
const rollDiceButton = document.getElementById("rollDiceButton");

rollDiceButton.addEventListener('click', function() {

    const values = [];
    const images = [];

    for(let i=0; i<diceInput.value; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice ${value}.png" alt="Dice ${value}">`);
    }
    diceResults.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");

});
```

### Explanation
- You enter the number of dice to roll in the input box.
- Click the **"Roll Dice"** button.
- The app generates random numbers between 1 and 6 for each die.
- It displays the numbers rolled and shows corresponding dice images from the `images/` folder (e.g., `dice 1.png`, `dice 2.png`, etc.).  

### What I learnt:
#### By doing this challenge, I deepened my understanding on:
- How to use the `Math.random()` function to generate random numbers.  
- How to manipulate the DOM using `textContent` and `innerHTML`.  
- Efficiently updating the DOM **outside of loops** to improve performance.  
- Using JavaScript `arrays` to store and manage dynamic data.  
- Basic event handling with `.addEventListener()`. 