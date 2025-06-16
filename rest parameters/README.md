## Rest Parameters
Rest parameters (...rest) allows a function work with variable number of arguments by binding them into an array.  
spread operator - expands an array into seperate elements.   
rest parameter - bundles seperate elements into an array.  
rest parameter does the opposite of what the spread parameter does.  

##  I practiced using rest parameters in the examples below:
### Example 1

```javascript
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
```
### Explanation
*...foods* in the function bundles all arguments into an array.   
Useful for collecting arguments and returning them as an array.  
Inside *console.log(...foods)*, it spreads them back into separate values.   

### Example 2
### 
```javascript
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
```
### Explanation
*rest* collects numbers.  
Loops are used to calculate total.  
*.length* gives the count for average.  
*.toFixed(3)* formats result to 3 decimal places.  

### Example 3
```javascript
function joinStrings(...strings){
    return strings.join(" ");
}
const fullName = joinStrings("Mr.", "Linus", "Ogeto", "Bwana");
console.log(fullName);
```

### Explanation
*...strings* collects all inputs like "Mr.", "Linus", etc. into an array:  
*["Mr.", "Linus", "Ogeto", "Bwana"]*  
*.join(" ")* joins the array elements into a single string with spaces between them.  

### Key takeaway
Rest parameters are perfect when you're unsure how many arguments will be passed. They bundle inputs, giving flexibility, while spread does the opposite by expanding elements.