// Async makes a function return a promise
// Await makes an async function wait for a promise

// allows us to write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameter
// Everything after Await is placed in an event queue 

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("I walked the dog");
            }
            else{
                reject("I did NOT walk the dog");
            } 
        }, 1500);
    })
};

function washClothes(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clothesWashed = false;
            if(clothesWashed){
                resolve("I washed my clothes");
            }
            else{
                reject("Clothes NOT washed");
            }
        }, 2500); 
    })
};

function buyFood(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const boughtFood = true;
            if(boughtFood){
                resolve("I bought food");
            }
            else{
                reject("Food NOT bought");
            } 
    }, 500);
    })
};


async function dailyTasks() {

    try{
        const dog = await walkDog();
        console.log(dog);

        const clothes = await washClothes();
        console.log(clothes);

        const food = await buyFood();
        console.log(food);

        console.log("All Work Completed");
    }
    catch(error){
        console.error(error);
    }

};

dailyTasks();