// function is a section of reusable code. We declare it once and use it whenever we want.
// We call the function to execute the code.

// example 1
function happyBirthday(name, age){
    console.log(`Happy Birthday to you`);
    console.log(`Happy Birthday ${name}`);
    console.log(`You are ${age}`);
}
happyBirthday("Linus", 29);
happyBirthday("Bwana", 20);


// example 2
function add(x,y){
    return x + y;
}
console.log(add(8,3));


// example 3 - determining if the number is even or odd
function oddEven(number){
    return number % 2 === 0 ? `${number} is even` : `${number} is odd`;
}
console.log(oddEven(25));


// example 4
function isValidEmail(email){
    return email.includes("@") ? true : false;   
}
console.log(isValidEmail("Linus@gmail.com"));