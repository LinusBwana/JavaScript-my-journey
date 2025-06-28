# array of objects
An **array of objects** is a data structure where each element of the array is an object. This is useful for representing structured collections of related data.

## I practiced array of objects using the examples below:
### Example 1:
```javascript
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
```

#### Console COdes and Ouput
##### typeof(fruits[0])
```javascript
console.log(typeof(fruits[0]));
// Output:
object
```

##### console.log(fruits[4])
```javascript
console.log(fruits[4]);
// Output:
{ name: 'ovacado', colour: 'green', price: 55 }
```
#####  Accessing a single property
```javascript
console.log(fruits[0].name);
// Output:
apple
``` 

##### Array after pop, shift, push, unshift
```javascript
console.log(fruits);
// Output:
[
  { name: 'guava', colour: 'red', price: 700 },
  { name: 'banana', colour: 'yellow', price: 245 },
  { name: 'watermelon', colour: 'purple', price: 355 },
  { name: 'grapes', colour: 'red', price: 455 },
  { name: 'ovacado', colour: 'green', price: 55 },
  { name: 'mango', colour: 'yellow', price: 250 }
]
```

##### .forEach() to print names
```javascript
fruits.forEach(fruit => console.log(fruit.name));
// Output:
guava
banana
watermelon
grapes
ovacado
mango
```

##### .map() to get array of names
```javascript
console.log(fruits.map(fruit => fruit.name));
// Output:
[ 'guava', 'banana', 'watermelon', 'grapes', 'ovacado', 'mango' ]
```

##### .filter(): yellow fruits
```javascript
console.log(fruits.filter(fruit => fruit.colour === "yellow"));
// Output:
[
  { name: 'banana', colour: 'yellow', price: 245 },
  { name: 'mango', colour: 'yellow', price: 250 }
]
```

##### .filter(): high price (≥ 500)
```javascript
console.log(fruits.filter(fruit => fruit.price >= 500));
// Output:
[
  { name: 'guava', colour: 'red', price: 700 }
]
```

##### .reduce(): lowest price fruit
```javascript
console.log(fruits.reduce((min, next) => next.price < min.price ? next : min));
// Output:
{ name: 'ovacado', colour: 'green', price: 55 }
```

##### .reduce(): total price of all fruits
```javascript
console.log(fruits.reduce((sum, next) => sum + next.price, 0));
// Output:
2055
```

### What I Did
- I created an array of fruit objects with different names, colours, and prices.
- I accessed specific fruit data using indexing and dot notation.
- I modified the array using *pop(), shift(), push(), and unshift()*.
- I used *.forEach()* to loop through and print all fruit names.
- I applied *.map()* to extract an array of fruit names.
- I used *.filter()* to get fruits based on specific conditions (e.g. yellow colour or price ≥ 500).
- I used .*reduce()* to:
1. Find the fruit with the lowest price
2. Calculate the total cost of all fruits  

Through this, I deepened my understanding on manipulating and working with array and objects.

## What I learnt from the two examples
1. I learnt how to store and manage structured data using arrays of objects.
2. I practiced using JavaScript's most common and useful array methods for:
- Iteration (*forEach*)
- Transformation (*map*)
- Filtering (*filter*)
- Aggregation (*reduce*)

This practice reinforced my understaing on loops, arrays and objects.