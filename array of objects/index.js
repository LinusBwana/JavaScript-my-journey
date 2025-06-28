
const fruits = [{name: "apple", colour: "green", price: 455},
                {name: "banana", colour: "yellow", price: 245},
                {name: "watermelon", colour: "purple", price: 355},
                {name: "grapes", colour: "red", price: 455},
                {name: "ovacado", colour: "green", price: 55},
                {name: "pineapple", colour: "yellow", price: 174}];


console.log(typeof(fruits[0]));
console.log(fruits[4]);
console.log(fruits[0].name);
fruits.pop();
fruits.shift();
fruits.push({name: "mango", colour: "yellow", price: 250});
fruits.unshift({name: "guava", colour: "red", price: 700});
console.log(fruits);

// forEach
fruits.forEach(fruit => console.log(fruit.name));

// .map()
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// .filter()
const yellowFruits = fruits.filter(fruit => fruit.colour === "yellow");
console.log(yellowFruits);
const highPrice = fruits.filter(fruit => fruit.price >= 500);
console.log(highPrice);

// reduce
const minFruit = fruits.reduce((min, next) => 
                                next.price < min.price ?
                                next : min);
console.log(minFruit);

// reduce example 2
const totalCost = fruits.reduce((sum, next) => sum + next.price, 0);
console.log(totalCost);