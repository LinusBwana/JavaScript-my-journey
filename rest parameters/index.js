// rest parameters (...rest) allows a function work with variable number of arguments by binding them into an array
// spread - expands an array into seperate elements
// rest - bundles seperate elements into an array

// example 1
function openFridge(...foods){
    console.log(foods); 
    console.log(...foods); //unpacks the element - spread operator
};

const food1 = "pizza";
const food2 = "smoky";
const food3 = "chapati";
const food4 = "hotdog";
const food5 = "smocha";

openFridge(food1, food2, food3, food4);

// using return
function getFood(...foods){
    return foods
}

const foods = getFood(food1, food2, food3, food4);
console.log(foods);


// example 2
function sum(...numbers){
    
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(3, 6, 8, 9, 3, 6, 9);
console.log(`The sums is KSh${total}`);

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number
    }
    return (result/numbers.length).toFixed(3);
}
const average = getAverage(53, 89, 59, 93, 76, 99, 59, 75, 71);
console.log(`The average is ${average}`);


// example 3
function joinStrings(...strings){
    return strings.join(" ");
}
const fullName = joinStrings("Mr.", "Linus", "Ogeto", "Bwana");
console.log(fullName);