# eventListeners
An event listener is a method that waits for a specific user interaction such as a click or mouse movement on a DOM element and then responds to it by executing a function.

### The syntax for adding an event listener is:
```javascript
element.addEventListener(eventType, callbackFunction);
```
#### Mouse Events I Used
- click	- Triggered when a mouse button is clicked
- mouseover	- Triggered when the mouse pointer enters an element
- mouseout - Triggered when the mouse pointer leaves an element

The second parameter callbackFunction can be:
- A named function
- An anonymous function
- An arrow function (which I used in this example)

#### event and event.target
- *event* is a built-in object automatically passed to the callback function whenever the event is fired.
- *event.target* refers to the specific DOM element that fired the event, allowing us to directly manipulate that element.

In this practise, I used *event.target* to:
- Change the *backgroundColor*
- Update the *textContent* of the element the user interacted with

## My Code
```javascript
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => { 
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 😁";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't touch me! 😡";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "aqua";
    event.target.textContent = "Hover me! 😊";
});
```

### My Code Explanation
*1. I selected the elements I want to interact with:*
```javascript
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
```

*2. I added a click event listener to the button:*
```javascript
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 😁";
});
```
- When the button is clicked, the background color of *myBox* changes to `tomato` and the text changes to `"Ouch! 😁"`.
- I used an **arrow function** here as the callback.

*3. I added a mouseover event listener to the box:*
```javascript
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't touch me! 😡";
});
```
- When the mouse hovers over the box, its background turns `yellow` and the text updates to `Don't touch me! 😡`.

*4. I added a mouseout event listener to restore the original state:*
```javascript
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "aqua";
    event.target.textContent = "Hover me! 😊";
});
```
- When the mouse leaves the box, it reverts to `aqua` with a friendly message, `Hover me! 😊`.`

## What I Learnt
1. How to use *addEventListener()* to handle user interactions.
2. The difference between *click*, *mouseover*, and *mouseout* events.
3. How *event.target* helps dynamically change the properties of the exact element that triggered the event.
4. How arrow functions make event handler code more concise.

