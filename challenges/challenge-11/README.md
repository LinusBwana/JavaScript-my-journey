# Simple calculator
This challenge exercise is a simple calculator built using HTML, CSS, and JavaScript. Below, I’ll walk through the core JavaScript logic and explain how I implemented each part of the functionality.  
The exercise helped me better understand DOM manipulation, user input handling, and basic error management in JavaScript.

## How I handled the exercise
I started by selecting the display input and all the buttons on the page. This allowed me to interact with the calculator interface and listen for button clicks.

### Code
```javascript
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
```

Then I created the appendToDisplay function, which adds a click event listener to each button. Depending on the button pressed:
- If it's **"CLEAR"**, I called *clearDisplay()* to reset the calculator.
- If it's **"="**, I called *calculate()* to evaluate the expression.
- For any other button, I appended its text (e.g., numbers or operators) to the display.

### Code
```javascript
function appendToDisplay(){
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if(button.innerText === "CLEAR"){
                clearDisplay();
                return;
            }
            else if(button.innerText === "="){
                calculate();
                return;
            }
            display.value += button.innerText;
        })
    });
};
appendToDisplay();
```

The function clears the display. I used it to reset the calculator whenever the user presses the "CLEAR" button.
### Code
```javascript
function clearDisplay() {
    display.value = '';
};
```

I used the *eval()* function to evaluate the arithmetic expression entered by the user. For example, if the display shows *"5+3*2"*, *eval()* will compute the result according to operator precedence and return *11*.

### Code
```javascript
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'Error';
    }
};
```

## The challenge I encountered and how I solved it
- One challenge I faced was handling incorrect inputs. For instance, if the user entered something like 5++5 or just hit "=" with an empty display. Without proper handling, this would throw an error and crash the calculator.
- To solve this, I used a **try...catch** block inside the *calculate()* function:
    - Inside try, I attempt to evaluate the expression.
    - If an error occurs (like invalid syntax), the *catch* block sets the display to "*Error*".
- This makes the calculator much more user-friendly.

## What I Learnt
While building this calculator, I learnt:
1. How to dynamically attach event listeners to multiple buttons.
2. How to use *eval()* responsibly and securely within a controlled environment.
3. How important error handling is for user experience.
4. The power of *try...catch* to gracefully manage unexpected inputs or failures in logic.