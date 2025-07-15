// promise is an object that manages asynchronous operations
// wrap a promise object around {asynchronous code}
// I promise to return a value
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asychronous code})

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

walkDog().then(value => {console.log(value);
                         return washClothes()})
         .then(value => {console.log(value); 
                         return buyFood()})
         .then(value => {console.log(value); 
                         console.log("All Work Completed")})
         .catch(error => {console.log(error)});