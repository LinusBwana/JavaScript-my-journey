// string methods allow us to manipulate and work with text i.e strings

let userName = " Linus Bwana";

console.log(userName.charAt(0));
console.log(userName.indexOf("s"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);

userName = userName.trim();
console.log(userName);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));

let result = userName.includes(" ");
if(result){
    console.log("Username has spaces")
}
else{
    console.log("username has no spaces")
}

/*
let result = userName.startsWith(" ");
if(result){
    console.log("Username starts with a space")
}
else{
    console.log("Your username is okay")
}
*/

let phoneNumber = "+254 711 618 688";

phoneNumber = phoneNumber.replaceAll(" ", "-");
console.log(phoneNumber);

console.log(phoneNumber.padStart(20, "*"));
console.log(phoneNumber.padEnd(20, "*"));