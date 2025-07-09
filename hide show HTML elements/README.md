# Hide/Show HTML Elements
This project demonstrates how to toggle the visibility of an image using JavaScript. I explored two different methods for hiding and showing an image. Using the `display` property and the `visibility` property.

## What I Did
I created two small JavaScript examples:
- **Illustration 1** uses `style.display` to hide or show the image.
- **Illustration 2** uses `style.visibility` to hide or show the image.

In both examples, I used a `<button>` element to trigger the toggling behavior, and I updated the button's text content based on the current state of the image.

### Illustration 1: Using `display`
- I used *style.display = "none"* to **completely remove** the image from the layout.
- When toggled back, I set it to *"block"* to make it reappear.
- This method *removes the image's space* in the layout when hidden.

```javascript
const myImage = document.getElementById("myImage");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
    if (myImage.style.display === "none") {
        myImage.style.display = "block";
        myButton.textContent = "Hide";
    } else {
        myImage.style.display = "none";
        myButton.textContent = "Show";
    }
});
```
### Illustration 2: Using `visibility`
- I used *style.visibility = "hidden"* to make the image invisible.
- However, the image **still takes up space in the layout**, unlike the *display* method.
- This is useful when I want the layout to remain consistent even when content is hidden.

```javascript
const myImage = document.getElementById("myImage");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
    if (myImage.style.visibility === "hidden") {
        myImage.style.visibility = "visible";
        myButton.textContent = "Hide";
    } else {
        myImage.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
});
```

`display: none` completely removes the element from the layout.  
`visibility:` hidden hides the element, but it still occupies space.  

## What I Learnt:
From these two illustrations, I learnt:
- The difference between *display* and *visibility* in CSS.
- How to use addEventListener to trigger actions on button clicks.
- How to dynamically change element styles and button text with JavaScript.
- Why layout behavior matters when deciding how to hide or show elements.

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla)