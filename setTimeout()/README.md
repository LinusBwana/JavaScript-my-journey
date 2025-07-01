# setTimeout()
In this practice excercise, I explored how `setTimeout` and `clearTimeout` work in JavaScript. These functions allow us to delay code execution and optionally cancel it if needed. Below are three examples I built and tested to understand how timers can be started and cleared both immediately and interactively with button clicks.

### Example 1:
I used setTimeout() to delay an alert message by 3 seconds (3000 milliseconds). After the delay, a browser alert saying *"Hello Friends"* will pop up.

#### Code
```javascript
setTimeout(() => window.alert("Hello Friends"), 3000);;
```

#### Ouput
```javascript
// (After 3 seconds)
window.alert("Hello Friends");   // Output: [Browser popup] Hello Friends
```

### Example 2:
I scheduled a delayed alert using *setTimeout() *and saved its timer ID in a variable *(timeOutId)*. Then I immediately cancelled it using *clearTimeout(timeOutId);*. As a result, the alert never shows.

#### Code
```javascript
const timeOutId = setTimeout(() => window.alert("Hello Friends"), 3000);

clearTimeout(timeOutId);
```

#### Ouput
```javascript
// Output: No alert is shown as it was cancelled
```

### Example 3:
I created a small UI with two buttons:  
**Start Button**: Starts a timer to show the "Hello Friends" alert after 3 seconds.  
**Clear Button**: Cancels the timer before the alert can show.  
I stored the timer ID in a variable (*clearTimeOutId*) when the timer starts. If the user clicks **Stop** before 3 seconds pass, the alert is cancelled.  

#### Code
```javascript
let clearTimeOutId;

const startButton = document.getElementById("startButton");
const clearButton = document.getElementById("clearButton");

startButton.addEventListener("click", () => {
    clearTimeOutId = setTimeout(() => window.alert("Hello Friends"), 3000);
    console.log("STARTED");
}
);

clearButton.addEventListener("click", () => {
    clearTimeout(clearTimeOutId);
    console.log("STOPPED");
}
);
```

#### Ouput
```javascript
startButton.click();             // Output: STARTED
// (after clicking stop before 3 seconds)
clearButton.click();             // Output: STOPPED
```
If I don't click Stop:
```javascript
// (After 3 seconds)
window.alert("Hello Friends");   // Output: [Browser popup] Hello Friends
```

## What I learnt from the examples
1. *setTimeout()* is used to delay code execution.
2. It returns a unique timer ID which can be used to cancel it using *clearTimeout()*.
3. We can use *setTimeout* and *clearTimeout* together to control time-based behaviors like UI notifications, popups, or auto-logout features.
4. Storing the timeout ID in a variable is crucial for cancelling it.