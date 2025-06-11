## **JavaScript while Loop**  
The while loop repeatedly executes a block of code as long as a given condition is true.

### **Syntax:**
```javascript
while (condition) {  
  // code block to be executed  
}  
```


### Example:
```javascript
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
```

## How it works: 

**Initial setup:** *loggedIn* starts as **false**, so the while loop will run  
**Loop condition:** *while(!loggedIn)* means "keep looping while NOT logged in"  
**User prompts:** Each iteration asks for username and password using window.prompt()  
**Credential check:** If both username equals "myuserName" AND password equals "myPassword", it shows success message and sets **loggedIn = true**  
**Loop exit:** When **loggedIn becomes true**, the condition **!loggedIn becomes false**, ending the loop  
**Wrong credentials:** If credentials don't match, it shows "Wrong credentials" and loops again  






