
// example 1
/*
let minNum = 50;
let maxNum = 150;
let number = Math.floor(Math.random() * (maxNum-minNum)) + minNum;
let numberOfGuesses = 0;

let myButton = document.getElementById("myButton");
let myP = document.getElementById("myP");
let myPGuesses = document.getElementById("myPGuesses");

myButton.addEventListener('click', function(){
    let myInput = document.getElementById("myInput");
    let guess = Number(myInput.value);

    if(isNaN(guess)){
        myP.textContent = `${myInput.value} is an invalid Input. Enter a number`; 
    }
    else if(guess < minNum || guess > maxNum){
        myP.textContent = `Guess ouside range. Try a number between ${minNum} and ${maxNum}`;
    }
    else {
        numberOfGuesses ++;
        if(guess > number){
            myPGuesses.textContent = `Number of attemps is: ${numberOfGuesses}`;
            maxNum = guess;
            myP.textContent = `Too High. Try a number between ${minNum} and ${maxNum}`;
        }
        else if(guess < number){
            myPGuesses.textContent = `Number of attemps is: ${numberOfGuesses}`;
            minNum = guess;
            myP.textContent = `Too Low. Try a number between ${minNum} and ${maxNum}`;
        }
        else
            myP.textContent = `Your guess of ${guess} is correct`; 
    }
});
*/


// example 2
let minNum = 50;
let maxNum = 150;
let number = Math.floor(Math.random() * (maxNum-minNum)) + minNum;
let numberOfGuesses = 0;
let isPlaying = true;
let myInput;

while(isPlaying){
    let userInput = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    myInput = Number(userInput);

    if(isNaN(myInput)){
        window.alert (`${userInput} is an invalid Input. Enter a VALID number"`);
    }
    else if(myInput < minNum || myInput > maxNum){
        window.alert (`Guess ouside range. Try a number between ${minNum} and ${maxNum}`);
    }
    else{
        numberOfGuesses ++;    
        if(myInput < number){
            minNum = myInput;
            window.alert (`Too Low. Try a number between ${minNum} and ${maxNum}`);
        }
        else if (myInput > number){
            maxNum = myInput;
            window.alert (`Too High. Try a number between ${minNum} and ${maxNum}`);
        }
        else {
            window.alert (`Your guess ${myInput} is correct. No of guesses is: ${numberOfGuesses}`);
            isPlaying = false; 
        } 
    }
}

