## Password Generator
This exercise is similar to **Challenge-7**, but I chose to implement it using the **rest parameter** and **spread operator** to reinforce my understanding of these modern JavaScript concepts. By refactoring the code this way, I simplified the function design, made it more flexible, and avoided repetitive logic. This exercise helped me sharpen my understanding of **rest/spread syntax**, write cleaner function signatures, and appreciate how powerful and elegant JavaScript becomes with ES6+ features.

### Code:
```javascript
function passwordGenerator(...passwordChars){

    const passwordLength = 15;
    password = "";
    passwordChars = passwordChars.join("");

    for(let char = 0; char < passwordLength; char++){    
        charGenerator = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars[charGenerator]
    }   
    return password;
};

const numberChars = "0123456789";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacterChars = "~@#$%^&*()_-<>?/\|{}[]=+,.";

password = passwordGenerator(
    numberChars, 
    lowerCaseChars, 
    upperCaseChars, 
    specialCharacterChars);

console.log(password);
```

### Explanation:
1. **Function Definition** - The *passwordGenerator(...passwordChars)* function accepts any number of arguments thanks to the *rest parameter (...passwordChars)*, which bundles all character sets into a single array.  
2. **Password Length** - The password length is set to 15 characters by default.  
3. **Flattening Input** - The passwordChars array is converted into a single string using *.join("")*, merging all character groups (numbers, lowercase, uppercase, special characters) into one long pool of allowed characters.  
4. **Password Generation Loop** - A for loop runs 15 times: 
- On each iteration, a random index is selected using *Math.floor(Math.random() * passwordChars.length)*  
- A character at that index is picked and appended to the password string  
5. **Result** - The final password string (15 characters long) is returned and logged to the console.  


## What I learnt:
### By doing this challenge, I deepened my understanding on:
- How the rest parameter (...args) gathers all incoming arguments into a single array
- How the spread operator and .join("") help combine values for flexible use

## Take away
This exercise sharpened my understanding of modern JavaScript syntax like rest parameters and spread operators. It also helped me appreciate how clean and powerful my code can be when I think functionally and keep it flexible. This method is both readable and reusable, making it ideal for scalable, real-world applications like password generators.

