// how to accept user input
// 1. EASY WAY - window prompt
// 2. PROFESSIONAL WAY -  HTML textbox

// example 1
/*
let userName = window.prompt("What's your username");
console.log(userName)
*/

// example 2
let userName;
document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userName}`
    
}