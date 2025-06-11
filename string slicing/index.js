// string slicing - creates a substring from a portion of another string
// string.slice(start,end)

// example 1
const fullName = "Linus Bwana";

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

console.log(firstChar);
console.log(lastChar);


// example 2
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1)

console.log(firstName);
console.log(lastName);


// example 3
const email = "linusbwana@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extention = email.slice(email.indexOf("@")+1);

console.log(userName);
console.log(extention);