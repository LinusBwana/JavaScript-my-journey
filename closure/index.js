// Closure is a function defined inside another function.
// The inner fucntio has access to the variables and scope of the outer function.
// Allow for private variables and state maintenance.
// Used frequently in JS frameworks: React, Vue, Angular.


// example 1
function outer(){

    message = "This is outer";
    
    function inner(){
        console.log(message);
    };

    inner();

};

outer();


// example 2
function createCounter(){
    let count = 0;

    function increment(){
        count ++;
        console.log(`New counts is: ${count}`);
    };

    function getCount(){
        return count;
    };

    return {increment, getCount};
};

const counter =  createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is: ${counter.getCount()}`);


// example 3
function createGame(){
    score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    };

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    };

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
};

const game = createGame();

game.increaseScore(7);
game.increaseScore(9);
game.decreaseScore(5);
console.log(`Final score is: ${game.getScore()}`);