## Password Generator
This is a customizable password generator built with **JavaScript**. It allows users to specify:
- Password length
- Whether to include lowercase letters
- Whether to include uppercase letters
- Whether to include numbers
- Whether to include special characters.  

This project helped reinforce my understanding of string manipulation, conditional logic, and function design in JavaScript. It's also a practical example of creating a real-world utility that emphasizes both security and flexibility.

### Code:
```javascript
function passwordGenerator(length, includeLowerCase, includeUpperCase, includeNumbers, includdeSpecialCharacter){

    const numberChars = "0123456789";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacterChars = "~@#$%^&*()_-<>?/\|{}[]=+,.";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includdeSpecialCharacter ? specialCharacterChars : "";

    if(length <= 0){
        return (`password can not have 0 characters`);
    }

    if(allowedChars.length === 0){
        return (`Atleast one set of character needs to be selected`);
    }

    for(let i = 0; i <length; i++){
        const charIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[charIndex];
    }

    return password;

};

const passwordLength = 15;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includdeSpecialCharacter = true;

password = passwordGenerator(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includdeSpecialCharacter);
    
console.log(password);
```

### Explanation:
- The function `passwordGenerator()` accepts five parameters:
  1. `length` (number of characters in password)
  2. `includeLowerCase` (boolean)
  3. `includeUpperCase` (boolean)
  4. `includeNumbers` (boolean)
  5. `includdeSpecialCharacter` (boolean)
- Based on selected options, the generator builds a string of allowed characters.
- It then randomly selects characters from this pool using `Math.random()` and appends them to create a secure password.

## What I learnt:
#### By doing this challenge, I deepened my understanding on:
- How to work with **conditional logic** using the ternary operator (`? :`)
- Constructing dynamic strings by **building a character pool**
- Using `Math.random()` and `Math.floor()` to select random characters
- Writing clean, modular functions with flexible parameters
- Validating user input (e.g. ensuring length > 0 and character types are selected)
- **Most importantly:**  
  **Everything inside the `{}` of a loop in JavaScript is executed on each iteration regardless of indentation.** (Unlike Python, where indentation defines block scope)