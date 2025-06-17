# .map()
// *.map()* accepts a callback and applies that function to each element of an array, then return a new array without changing the original array.
Thispractice exercise takes an array of date strings in the format YYYY-MM-DD and converts each one to DD/MM/YYYY format using the .map() method.
 
## Syntax
```javascript
const newArray = array.map(function(currentValue, index, array) {
  // return the new value here
});
```
### Where;
- *currentValue* - The current item in the array  
- *index (Optional)* - The index of the current item  
- *array (Optional)* - The full array being processed    

## I practiced .map() method using the example below:
### Example 1:
```javascript
const dates = ["2025-06-17", "2025-06-18", "2025-06-18"];

const fortmattedDates = dates.map(function (element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
});
console.log(fortmattedDates);
```

#### Final output:
```javascript
["17/06/2025", "18/06/2025", "18/06/2025"]
```

### Example 2:
```javascript
const fruits = ["mango", "banana", "grape", "watermelom"];
const fruitsUpperCase = fruits.map(function(element){
    return element.toUpperCase();
});
console.log(fruitsUpperCase);
```

#### Final output:
```javascript
[ 'MANGO', 'BANANA', 'GRAPE', 'WATERMELOM' ]
```

#### What This Code Does:
- *fruits* is an array containing names of fruits (in lowercase).   
- The *map()* method is used to loop through each item in the array.  
- For each fruit *(element)*, it applies *.toUpperCase()*, converting the string to uppercase.  
- The result is stored in a new array* fruitsUpperCase.*  
- Finally, we log the new array to the console.  

## What I learnt:
- *.map()* is used to create a new array by transforming each element from the original.
- .*split("-")* is a string method that breaks a date like *"2025-06-17"* into an array like *["2025", "06", "17"]*.
- I learnt the key difference between *.forEach()* and *.map()*:
1. *.forEach()* is used when I want to perform side effects (like logging or modifying the original array), but it does not return a new array.
2. *.map()* is ideal when I want to **transform data and store the result in a new array**, while keeping the original unchanged. 

## Take away:
- Use *.forEach()* when I just need to loop and do something, like displaying values or updating external things (e.g., DOM).
- Use *.map()* when I want to convert or reformat each item and save the transformed result.
- *.map()* helps me write cleaner, more functional code when transforming arrays, especially when immutability matters.

