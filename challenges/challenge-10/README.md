# Stopwatch
In this project, I built a fully functional **stopwatch** using **HTML**, **CSS**, and **JavaScript**. The stopwatch includes **Start**, **Stop**, and **Reset** buttons, and displays time in the format `HH:MM:SS:MS`.  
I wanted to learn how to work with *timing functions*, *event listeners*, and *DOM manipulation* in JavaScript.

### Code
```javascript
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer = null; //no value
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startBtn.addEventListener('click', () => {

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        isRunning = true;
    }
});

stopBtn.addEventListener('click', () => {
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`;
});

function updateDisplay() {
    const currentTime = Date.now(); 
    elapsedTime = currentTime - startTime;
    
    let hours = (Math.floor(elapsedTime / (1000 * 60 * 60))).toString().padStart(2, '0');
    let minutes = (Math.floor((elapsedTime / (1000 * 60)) % 60)).toString().padStart(2, '0');
    let seconds = (Math.floor((elapsedTime / 1000 % 60)).toString().padStart(2, '0'));
    let milliseconds = (Math.floor((elapsedTime % 1000) / 10));   

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
};
```

## Code explanation
I used the `getElementById` method to reference three button elements (`start`, `stop`, `reset`) and one display element:

### Start Button
When I click *Start*, I check if the stopwatch is not already running. If not, I calculate the *startTime* (accounting for previous *elapsedTime*), then use *setInterval()* to call *updateDisplay()* every 10 milliseconds:
For example:

```javascript
startTime = Date.now() - elapsedTime;
timer = setInterval(updateDisplay, 10);
```

### Stop Button
Clicking **Stop** pauses the stopwatch by clearing the interval and saving the current *elapsedTime*:

```javascript
clearInterval(timer);
elapsedTime = Date.now() - startTime;
```

### Reset Button
The **Reset** button clears everything interval, *startTime*, and *elapsedTime* — and resets the display back to `00:00:00:00`.

### Display Update
I calculate *elapsedTime* from *startTime*, then convert it into *hours, minutes, seconds, and milliseconds*.    
I use *padStart()* to format the numbers properly:

```javascript
display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
```

## What I learnt
- How to use `setInterval()` and `clearInterval()` to manage time updates.
- How to store and calculate *elapsed time* accurately, even after pausing and restarting.
- How to manipulate the *DOM in real time* to reflect changes.
- Best practices in writing *clean and readable* JavaScript code.