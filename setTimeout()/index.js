// setTimeout() function in JS allows us to schedule the execution of a function after an amount of time (milliseconds)
// setTimeout(callback, delay);

// example 1
setTimeout(() => window.alert("Hello Friends"), 3000);


// example 2
const timeOutId = setTimeout(() => window.alert("Hello Friends"), 3000);

clearTimeout(timeOutId);


// example 3
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