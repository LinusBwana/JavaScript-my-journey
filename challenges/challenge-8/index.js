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