// Random number generator


// example1
// genearting random number between 0 and 1
/*
let randomNum = Math.random();
console.log(randomNum)

// example2
// genearting random number between 0 and 6
let randomNum = Math.random() * 6;
console.log(randomNum)

// example3
// genearting random number between 0 and 6 (integers)
let randomNum = Math.floor(Math.random() * 6);
console.log(randomNum)

// example4
// genearting nrndom number between 50 and 100 (integers)
const min = 50;
const max = 53;
let randomNumber = Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber);
*/

const myButton = document.getElementById("myButton");
const mylabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * (max-min)) + min;
    mylabel.textContent = randomNum;
}