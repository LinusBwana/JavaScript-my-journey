// callback hell is a situation in JavaScript whwere callbacks are nested within other callbacks to the degree where the ncode is difficult to read. 
// we use promises + async/wait to avoid callback Hell

function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 completed");
        callback();
    }, 2000);
};

function task2(callback){
    setTimeout(() =>{
        console.log("Task 2 completed");
        callback();
    },1000);
};

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 1500);
};

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 completed");
        callback();
    }, 500);
};

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks are completed")
            });
        });
    });
});
