// Fisher-Yates algorithm

const cards = ["Q", 1, 8, "A", 3, 6, "J", 4, 8, "K", 9, 10, 5, 2];

shuffle(cards);
console.log(cards);


function shuffle(array){
    for(let i = array.length - 1; i > 0 ; i--){
        const randomNum = Math.floor(Math.random() * (i+1)) ;
        
       [ array[i], array[randomNum]] = [array[randomNum], array[i]];
    };
};
