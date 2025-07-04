// eventListeners - listen for specific events to create interactive web pages.
// events: click, mouseover, mouseout.
// .addEventListener(click, callback function);

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