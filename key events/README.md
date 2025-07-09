# JavaScript Keyboard Events
This repository demonstrates how to handle **keyboard events** in JavaScript using two simple examples. The goal is to show how you can detect when a user presses or releases a key, and how you can use that to interact with elements on a web page.

## What Are Keyboard Events?
Keyboard events allow us to respond to **user input from the keyboard**. JavaScript provides three main types:

- `keydown`: Triggered when a key is **pressed down**
- `keyup`: Triggered when a key is **released**
- `keypress`: (Deprecated) Used for printable characters only (Not compatible with some browers).

These events are often used for **interactive UI elements**, games, form controls, or accessibility features.

## Understanding `event` in JavaScript
When a keyboard event is triggered, the browser automatically passes an **`event` object** to the event handler function.

```javascript
document.addEventListener("keydown", event => {
    console.log(event); // Logs the event object
});
```
The *event* object is a JavaScript object that contains a lot of useful information, such as:

- *event.key:* The **string value** of the key pressed (e.g., *"ArrowUp", "a", "Enter"*)
- *event.code:* The physical key on the keyboard (e.g., *"KeyA", "ArrowDown"*)
- *event.altKey*, *event.ctrlKey*, etc.: Boolean values indicating whether modifier keys were held
- *event.preventDefault()*: A method to prevent default browser behavior (e.g., page scrolling)

## My Demostartion of Keyboard Events
### Example 1: Logging Key Presses
In the first example, I used *keydown* and *keyup* event listeners to log which keys were being pressed and released in real time:

```javascript
document.addEventListener("keydown", event => {
    console.log(`keydown: ${event.key}`);
}); 

document.addEventListener("keyup", event => {
    console.log(`keyup: ${event.key}`);
}); 
```

#### What I Did:
- I accessed the key pressed using *event.key*.
- I logged the output to the browser console.
- This helped me see the exact key names returned by different keys.

### Example 2 – Moving a Box with Arrow Keys
In this interactive example, I made a box element move on the screen using the arrow keys.

```javascript
const myBox = document.getElementById("myBox");
const moveAmount = 50;
let x = 0;
let y = 0;

document.addEventListener("keyup", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "aqua";
});

document.addEventListener("keydown", event => {
    myBox.textContent = "😁";
    myBox.style.backgroundColor = "tomato";

    if (event.key.startsWith("Arrow")) {
        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
```
#### What I Did:
- I accessed the DOM element using g*etElementById()*.
- I updated its *top* and *left* styles dynamically using keyboard input.
- I used *event.key.startsWith("Arrow")* to detect movement keys.
- I used *event.preventDefault()* to prevent the page from scrolling.
- I changed the emoji and background color on key press and release to provide visual feedback.

## What I Learnt from the two examples
From building these two examples, I learnt:
- How to listen for key events using* addEventListener*
- The difference between *keydown* and *keyup*
- How to read which key was pressed using *event.key*
- How to manipulate an HTML element’s position using JavaScript and keyboard input
- How to add basic interactivity and feedback using styles and emojis

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla)