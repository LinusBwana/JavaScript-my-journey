// map() accepts a callback and applies that function to each element of an array, then return a new array without changing the original array

// example 1
const number = [1, 3, 5, 8, 7 ,4];
const square = number.map(function square(element){
    return Math.pow(element, 2)
});
console.log(square);


// example 2
const cubic = number.map(function(element){
    return Math.pow(element, 3)
});
console.log(cubic)


// example 3
const fruits = ["mango", "banana", "grape", "watermelom"];
const fruitsUpperCase = fruits.map(function(element){
    return element.toUpperCase();
});
console.log(fruitsUpperCase);


// example 4
const dates = ["2025-06-17", "2025-06-18", "2025-06-18"];

const fortmattedDates = dates.map(function (element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
});
console.log(fortmattedDates);


