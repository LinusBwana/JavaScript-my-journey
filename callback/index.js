// callback is a function that is passed as an argument to another function
// used to handles asychronous operations;
// 1. reading a file
// 2. network requirements
// 3. interacting with databases

// example 1

goodBye(hello);
leave();

function hello(){
    console.log("Hello");
};

function leave(){
    console.log("Leave");
};

function goodBye(callback){
    console.log("Good Bye");
    callback()
};


// example 2

sum(renderResult, 8, 7);

function sum(callback, a, b){
    answer = a + b;
    callback(answer);
};

function renderResult(answer){
    const myH1 =  document.getElementById("myH1");
    myH1.textContent = answer;
};