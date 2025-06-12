// variable scope is where a variable is recognized and accessible (local vs global)

let x = 5; // this is a global variable

function function1(){
    console.log(x);
    console.log(y); //will return an error because y has been declared in function2 hence visbible and accessible inside function2 only
};

function function2(){
    let x = 3; //this is a local variable - the local variable is given a priority
    let y = 4; //this is a local variable - only visible and accessible wuth function2
    console.log(x);
    console.log(y);
};

function1();
function2();