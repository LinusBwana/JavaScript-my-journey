# .reduce()
*.reduce()* method in JavaScript is used to "reduce" an array into a single value. This could be the sum, a maximum/minimum, a combined object or any custom result you build step-by-step.

## Syntax
```javascript
array.reduce(function(accumulator, currentValue, index, array) {
    // your logic here
    return updatedAccumulator;
}, initialValue);

```
### Where;
- *accumulator* - The value returned from the previous iteration (or the initial value)  
- *currentValue* - The current element in the array being processed.    
- *index* - (Optional) The index of the current element in the array.      
- *array* - (Optional) The original array being reduced.  
- *initialValue* - (Optional but recommended) The value used as the first accumulator.

## I practiced .reduce() method using the examples below:
### Example 1:
```javascript
const prices = [45, 43.08, 90.50, 56.90, 10.30, 88.16];
const total = prices.reduce(function(accumulator, next){
    return accumulator + next
});
console.log(`The total is Ksh${total.toFixed(2)}`);
```

#### Final output:
```javascript
The total is Ksh333.94
```

#### What This Code Does:
- *accumulator* starts with the first item (unless an initial value is provided).  
- It adds the next price to it, one by one.  
- At the end, it returns the **sum of all prices**.  
- *.toFixed(2)* formats the total to two decimal places.  

### Example 2:
```javascript
const grades = [75, 90, 70, 49, 17, 65, 38, 87, 69];
const maxGrade = grades.reduce(function(previous, next){
    return Math.max(previous, next);
});
console.log(maxGrade);
```

#### Final output:
```javascript
90
```

#### What This Code Does:
Here, *previous* holds the highest value seen so far.  
*next* is the current grade being compared. 
*Math.max()* returns the larger of the two.  
After the loop, the highest grade remains.