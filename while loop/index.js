// while loop will repaate a certain code while some condition is true


// example 1
/*
let userName = "";
while(userName === "" || userName == null){
    userName = window.prompt("Enter your name: ");
}
console.log(`Hello ${userName}`);
*/

// example 2
/*
let userName;
do{
    userName = window.prompt("Enter your name: ");
}while(userName === "" || userName == null)
console.log(`Hello ${userName}`);
*/

// example 3
let loggedIn = false;
let password;
let userName;

while(!loggedIn){
    userName = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(userName === "myuserName" && password === "myPassword"){
        window.alert("You have logged in");
        loggedIn = true;
    }
    else{
        window.alert("Wrong credentials");
    }  
}