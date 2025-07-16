# Working with JSON in JavaScript
This project is a basic demonstration of how to use **JSON (JavaScript Object Notation)** in JavaScript. I used this to learn how to:
- Convert JavaScript data (arrays and objects) to JSON strings using *JSON.stringify()*
- Convert JSON strings back into JavaScript data using *JSON.parse()*
- Fetch JSON data from a file using *fetch()*
- SSave and retrieve JSON data using the browser's *local storage*

## I demostrated my understanding as illustrated in the examples below
### Converting JavaScript to JSON String using *JSON.stringify()*
I converted an array of names to a JSON string using *JSON.stringify()*. This is useful for saving or sending the data.

#### Example 1: Array to JSON string
```javascript
const names = ["Linus", "Melvin", "Sandra", "Laura"];
const namesString = JSON.stringify(names);
console.log(namesString);
```

#### Console Output
```javascript
["Linus","Melvin","Sandra","Laura"]
```

#### Example 2: Object to JSON string
I converted a single person object into a JSON string.
```javascript
const person = {
    "name": "Linus",
    "age": 29,
    "isEmployed": false
}
const personString = JSON.stringify(person);
console.log(personString);
```

#### Console Output
```javascript
{"name":"Linus","age":29,"isEmployed":false}
```

#### Example 3: Array of objects to JSON string
I converted an array of multiple people objects into a JSON string.
```javascript
const people = [
    { "name": "Linus", "age": 29, "isEmployed": false },
    { "name": "Laura", "age": 25, "isEmployed": false },
    { "name": "Lawrence", "age": 35, "isEmployed": false },
    { "name": "Sandra", "age": 19, "isEmployed": false }
];

const peopleString = JSON.stringify(people);
console.log(peopleString);
```

#### Console Output
```javascript
[{"name":"Linus","age":29,"isEmployed":false},{"name":"Laura","age":25,"isEmployed":false},{"name":"Lawrence","age":35,"isEmployed":false},{"name":"Sandra","age":19,"isEmployed":false}]
```

### Converting JSON String to JavaScript using *JSON.parse()*
#### Example 1: JSON string (array) to JavaScript array
I turned a JSON string back into a normal JavaScript array using *JSON.parse()*.
```javascript
const jsonNames = `["Linus", "Melvin", "Sandra", "Laura"]`;
const parsedNames = JSON.parse(jsonNames);
console.log(parsedNames);
Console Output:
```

#### Console Output
```javascript
[ 'Linus', 'Melvin', 'Sandra', 'Laura' ]
```

#### Example 2: JSON string (object) to JavaScript object
I turned a JSON string into a regular JavaScript object.
```javascript
const jsonPerson = `{
    "name": "Linus",
    "age": 29,
    "isEmployed": false
}`;
const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);
```

#### Console Output
```javascript
{ name: 'Linus', age: 29, isEmployed: false }
```

#### Example 3: JSON string (array of objects) to JavaScript array
I converted a JSON string of people into a usable JavaScript array of objects.

```javascript
const jsonPeople = `[{
    "name": "Linus",
    "age": 29,
    "isEmployed": false
},
{
    "name": "Laura",
    "age": 25,
    "isEmployed": false
},
{
    "name": "Lawrence",
    "age": 35,
    "isEmployed": false
},
{
    "name": "Sandra",
    "age": 19,
    "isEmployed": false
}]`;
const parsedPeople = JSON.parse(jsonPeople);
console.log(parsedPeople);
```

#### Console Output:
```javascript
[
  { name: 'Linus', age: 29, isEmployed: false },
  { name: 'Laura', age: 25, isEmployed: false },
  { name: 'Lawrence', age: 35, isEmployed: false },
  { name: 'Sandra', age: 19, isEmployed: false }
]
```

### Fetching JSON Data using fetch()
I fetched a JSON file and displayed each object using *.forEach()*. I learnt how *fetch()* returns a promise and how *.then()* works
```javascript
fetch("people.JSON")
    .then(response => response.json())
    .then(value => value.forEach((person) => {
        console.log(person);
    }));
```

The *people.JSON* file contained:
```javascript
[
  { "name": "Linus", "age": 29, "isEmployed": false },
  { "name": "Laura", "age": 25, "isEmployed": false },
  { "name": "Lawrence", "age": 35, "isEmployed": false },
  { "name": "Sandra", "age": 19, "isEmployed": false }
]
```

#### Console Output:
```javascript
{ name: 'Linus', age: 29, isEmployed: false }
{ name: 'Laura', age: 25, isEmployed: false }
{ name: 'Lawrence', age: 35, isEmployed: false }
{ name: 'Sandra', age: 19, isEmployed: false }
```

### Saving and Retrieving JSON from Local Storage
#### Saving to Local Storage
I converted a car array to a JSON string and saved it to local storage with the key "*carsToJSON*".
```javascript
const cars = ["mazda", "BMW", "Auris", "Volvo"];
const carsToJSON = JSON.stringify(cars);
localStorage.setItem("carsToJSON", carsToJSON);
```

#### Retrieving from Local Storage
I retrieved the JSON string from local storage and converted it back into a normal JavaScript array.
```javascript
const savedCars = localStorage.getItem("carsToJSON");
const JSONToCars = JSON.parse(savedCars);
console.log(JSONToCars);
```

#### Console Output:
```javascript
[ 'mazda', 'BMW', 'Auris', 'Volvo' ]
```

## What I learnt
- How to convert JavaScript data to JSON using *JSON.stringify()*
- How to convert JSON strings back to JavaScript using *JSON.parse()*
- How to use *fetch()* to get JSON data from a file
- How to store and retrieve JSON data in the browser's local storage