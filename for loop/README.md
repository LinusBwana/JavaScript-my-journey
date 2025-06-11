## **JavaScript for loop**  
The for loop will execute a block of code a LIMITED number of times.

### **Syntax:**
```javascript
for (initialization; condition; increment) {
  // code to execute
}
```
## Explanation
**Initialization:** Runs once before the loop starts  
**Condition**: Checked before each iteration  
**Increment:** Runs after each iteration  

### Example:
```javascript
for(let i = 0; i <= 20; i++){

    if(i == 6){
        continue
    }
    else if(i == 13){
        break
    }
    console.log(i);
}
```

## What happens:
**i = 0 to 5:** Prints normally **(0, 1, 2, 3, 4, 5)**  
**i = 6:** *continue* → skips printing, moves to next iteration  
**i = 7** to 12: Prints normally (7, 8, 9, 10, 11, 12)  
**i = 13:** *break* → exits loop entirely  
 
## Output
```
0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12
```

## break and continue in loops
**break**  
*Purpose:* Exits the loop entirely    

**continue**    
*Purpose:* Skips the current iteration, moves to next  