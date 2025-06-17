// forEach method is used to iterate over the elements of an array and apply a specified function (callback) to each element
// array.forEach(callback)
// element, index, array are provided


// example 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function(element, index, array){
    array[index] = element * 2;
});
console.log(numbers);


// example 2
let fruits = ["mango", "banana", "watermelon", "pineapple"];

fruits.forEach(function(element, index, array){
    array[index] = element.toUpperCase();
});
console.log(fruits);