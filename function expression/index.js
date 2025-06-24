// function declaration - define a block of reusable code that perfomes a specific task
// function expression - a way of defining a function as a variable or value


// example 1 - passing a function to a variable
const hello = function(){
    console.log("Hello there");
};
hello();

// example 2 - passing a fucntion as a value
setTimeout(function(){
    console.log("timeout over");
}, 3000)

// example 3
const numbers = [1, 2, 3 , 4, 5, 6, 8, 9, 10, 11, 12]; 
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);

// example 4
const marks = [88, 55, 25, 52, 63, 90, 78];
const total = marks.reduce(function(accumulator, next){
    return accumulator + next;
});
console.log(total);

// example 5
const students = ["philip", "linus", "shee", "laura"];
const studentsUpperCase = students.map(function(element){
    return element.toUpperCase();
});
console.log(studentsUpperCase);