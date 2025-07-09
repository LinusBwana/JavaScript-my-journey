// eventListeners - listen for specific events to create interactive web pages.
// key events: keydown, keyup.

// example 1
document.addEventListener("keydown", event => {
    console.log(`keydown: ${event.key}`);
}); 

document.addEventListener("keyup", event => {
    console.log(`keyup: ${event.key}`);
}); 


// example 2
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

    if(event.key.startsWith("Arrow")){

        event.preventDefault(); // Prevent default scrolling behavior
        switch(event.key){
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
    };
});