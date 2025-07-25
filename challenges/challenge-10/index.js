// STOP WATCH

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