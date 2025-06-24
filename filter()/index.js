// .filter() creates a new array by filtering out elements


// example 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);


// example 2
const ages = [16, 35, 15, 9, 19, 47, 39, 21, 20];
const adults = ages.filter(function(element){
    return element > 18;
});
console.log(adults);


// example 3
const words = ["mango", "apple", "cococut", "banana", "grape", "pineapple"];
const longWords = words.filter(function(element){
    return element.length > 6;
});
console.log(longWords);