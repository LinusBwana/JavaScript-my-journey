// Rock - Paper - Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const rockMove = document.getElementById("rockMove");
const paperMove = document.getElementById("paperMove");
const scissorsMove = document.getElementById("scissorsMove");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(choices, playerChoice){
    let result = "";
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if(playerChoice === computerChoice){
        result = "Draw"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "paper") ? "Computer Wins" : "You Win";
                break;
            case "paper":
                result = (computerChoice === "scissors") ? "Computer Wins" : "You Win";
                break;
            case "scissors":
                result = (computerChoice === "rock") ? "Computer Wins" : "You Win";
                break;
        };
    };
    
    resultsDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You Win":
            resultsDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Computer Wins":
            resultsDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultsDisplay.textContent = result;
};

rockMove.addEventListener("click", () => {
    playGame(choices, "rock");
});
paperMove.addEventListener("click", () => {
    playGame(choices,"paper");
});
scissorsMove.addEventListener("click", () => {
    playGame(choices,"scissors");
});