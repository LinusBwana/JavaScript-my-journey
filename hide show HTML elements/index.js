// illustration 1
/*
const myImage = document.getElementById("myImage");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () =>{
    if (myImage.style.display === "none") {
        myImage.style.display = "block";
        myButton.textContent = "Hide";
    } else {
        myImage.style.display = "none";
        myButton.textContent = "Show";
    }
});
*/


// illustration 2
const myImage = document.getElementById("myImage");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () =>{
    if (myImage.style.visibility === "hidden") {
        myImage.style.visibility = "visible";
        myButton.textContent = "Hide";
    } else {
        myImage.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
});
