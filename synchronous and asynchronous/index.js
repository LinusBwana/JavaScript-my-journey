// synchronous - executes line by line consecutively in a sequential manner, blocking the execution of the next line until the current line is completed.
// asynchronous - Allow multiple operations to run concurrently, without blocking the execution of the next line.
//                Example: I/O operations, network requests, timers, etc.
//                Handled with callbacks, promises, or async/await syntax.
//                example: setTimeout, fetch API, etc.


// example 1
setTimeout(() => console.log("Event 1"), 3000);

console.log("Event 2");
console.log("Event 3");
console.log("Event 4");


// example 2
function function1(callback){
    setTimeout(() => {console.log("This is event 1");
                      callback()}, 5000);
};

function function2(){
    console.log("This is event 2");
    console.log("This is event 3");
    console.log("This is event 4");

};
function1(function2);