
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