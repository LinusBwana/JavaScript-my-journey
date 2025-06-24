# .filter()
*.filter()* is a built-in JavaScript array method that loops through each item in an array, runs a test (condition) on each item, returns a new array containing only the items that pass the test (i.e., return true).

## Syntax
```javascript
const newArray = array.filter(function(element, index, array) {
  // return the new value here
});
```
### Where;
- *currentValue* - The current item in the array  
- *index (Optional)* - The index of the current item  
- *array (Optional)* - The full array being filtered    

## I practiced .filter() method using the examples below:
### Example 1:
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);
```

#### Final output:
```javascript
[2, 4, 6, 8, 10]
```

#### What This Code Does:
1. The array contains numbers from 1 to 10.  
2. The *.filter()* method checks each number:  
- If *element % 2 === 0* (i.e., number is divisible by 2), it's even.  
- It returns *true* for even numbers, keeping them.  
- It returns *false* for odd numbers, removing them.

### Example 2:
```javascript
const words = ["mango", "apple", "cococut", "banana", "grape", "pineapple"];
const longWords = words.filter(function(element){
    return element.length > 6;
});
console.log(longWords);
```

#### Final output:
```javascript
['cococut', 'pineapple']
```

#### What This Code Does:
1. The array contains fruit names.  
2. The *.filter()* method checks the length of each word:  
- If *element.length > 6*, the word is considered "long."  
- Words like *"cococut" (7 letters), "banana" (6 letters but not greater than), and "pineapple" (9 letters)* are considered.   
 
## What I learnt:
*.filter()* helps us extract items that meet a specific condition.
It’s a non-destructive method, meaning it doesn’t change your original array.