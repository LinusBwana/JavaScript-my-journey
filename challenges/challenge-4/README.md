## **Number guessing game**  
This number guessing game challenges the user to find a random number within a range. The app gives real-time feedback if the guess is too low, too high, out of range, or invalid. It has two versions: one uses an HTML interface with a button, and the other runs in the browser using prompt() in a loop. 

### Key takeaways:  
Through this challenge, I deepened my understanding how to validate input, use loops and conditionals effectively, update feedback dynamically, and create interactive experiences using both the DOM and browser prompts.   

### Example 1: DOM-based with HTML interface
```javascript
let minNum = 50;
let maxNum = 150;
let number = Math.floor(Math.random() * (maxNum-minNum)) + minNum;
let numberOfGuesses = 0;

let myButton = document.getElementById("myButton");
let myP = document.getElementById("myP");
let myPGuesses = document.getElementById("myPGuesses");

myButton.addEventListener('click', function(){
    let myInput = document.getElementById("myInput");
    let guess = Number(myInput.value);

    if(isNaN(guess)){
        myP.textContent = `${myInput.value} is an invalid Input. Enter a number`; 
    }
    else if(guess < minNum || guess > maxNum){
        myP.textContent = `Guess ouside range. Try a number between ${minNum} and ${maxNum}`;
    }
    else {
        numberOfGuesses ++;
        if(guess > number){
            myPGuesses.textContent = `Number of attemps is: ${numberOfGuesses}`;
            maxNum = guess;
            myP.textContent = `Too High. Try a number between ${minNum} and ${maxNum}`;
        }
        else if(guess < number){
            myPGuesses.textContent = `Number of attemps is: ${numberOfGuesses}`;
            minNum = guess;
            myP.textContent = `Too Low. Try a number between ${minNum} and ${maxNum}`;
        }
        else
            myP.textContent = `Your guess of ${guess} is correct`; 
    }
});
```

### Example 2: Prompt-based loop 
```javascript
let minNum = 50;
let maxNum = 150;
let number = Math.floor(Math.random() * (maxNum-minNum)) + minNum;
let numberOfGuesses = 0;
let isPlaying = true;
let myInput;

while(isPlaying){
    let userInput = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    myInput = Number(userInput);

    if(isNaN(myInput)){
        window.alert (`${userInput} is an invalid Input. Enter a VALID number"`);
    }
    else if(myInput < minNum || myInput > maxNum){
        window.alert (`Guess ouside range. Try a number between ${minNum} and ${maxNum}`);
    }
    else{
        numberOfGuesses ++;    
        if(myInput < number){
            minNum = myInput;
            window.alert (`Too Low. Try a number between ${minNum} and ${maxNum}`);
        }
        else if (myInput > number){
            maxNum = myInput;
            window.alert (`Too High. Try a number between ${minNum} and ${maxNum}`);
        }
        else {
            window.alert (`Your guess ${myInput} is correct. No of guesses is: ${numberOfGuesses}`);
            isPlaying = false; 
        } 
    }
}
```

## Explanation
### Example 1: DOM-based with HTML interface    
**Purpose:** Let the user guess a random number between 50 and 150 on a webpage using a text input and button.  

**How it works:**  
A random number is generated within the given range.  
Each button click reads the user input, checks if it’s valid and within range.  

*If valid:*
1. Increments the guess count.  
2. Updates the range based on the guess (too high/too low).  
3. Displays hints and total attempts.  
4. If correct, displays a success message.   

### Example 2: Prompt-based loop
**Purpose:** Let the user guess a random number using repeated prompt alerts until the correct number is guessed.  

**How it works:**    
A random number is generated between 50 and 150.    
The loop prompts the user for a guess until it’s correct.  

*On each guess:*
1. Validates the input.  
2. Narrows the guessing range with feedback (too low/high).  
3. Tracks and displays attempts.  
4. Ends when the correct number is guessed.    