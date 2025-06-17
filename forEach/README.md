# forEach
*forEach* method is used to iterate over the elements of an array and apply a specified function (callback) to each element  

## Syntax
```javascript
array.forEach(function(element, index, array) {
  // action to perform
});
```
### Where;
- *element* - The current item in the array  
- *index (Optional)* - The index of the current item  
- *array (Optional)* - The entire array  

## I practiced .forEach method using the examples below:
### Example 1: Doubling Numbers
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function(element, index, array){
    array[index] = element * 2;
});
console.log(numbers);
```

### How It Works:
1. The original array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
2. *.forEach()* loops through **each element** of the numbers array.  
3. For every loop, it provides:  
- *element* → the current value (e.g. 1, then 2, etc.)  
- *index* → the current position in the array (e.g. 0, 1, 2...)  
- *array* → the full array itself  
4. Inside the callback, *array[index] = element * 2* replaces the original number with its double directly in the same position of the array.  

#### Final output:
```javascript
[2, 4, 6, 8, 10, 12, 14, 16, 18]
```

### Example 2: Converting Strings to Uppercase
```javascript
let fruits = ["mango", "banana", "watermelon", "pineapple"];

fruits.forEach(function(element, index, array){
    array[index] = element.toUpperCase();
});
console.log(fruits);
```

### How It Works:  
1. The original array: *["mango", "banana", "watermelon", "pineapple"] * 
2. *.forEach()* loops over each fruit in the array.  
3. For each fruit, it:  
- Converts it to uppercase using *.toUpperCase()*  
- Replaces the lowercase string with the uppercase version at the same index using *array[index] = ...*

#### Final output:
```javascript
["MANGO", "BANANA", "WATERMELON", "PINEAPPLE"]
```

## What I learnt:
1. *.forEach()* can be used to update or transform array elements directly by modifying the array using its index.
2. The callback inside *.forEach()* provides access to:
- The current element
- Its index
- The array being looped through

## Take away:
I learned that *.forEach()* is ideal for performing actions on each item of an array. When I use the *array[index]* pattern, I can directly modify the original array. This makes it useful when I want to mutate the data without creating a new array.

