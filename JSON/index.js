// JSON{JavaScript  Object Notation} data-interchange format
// Used for exchanging data betwee a server and a web application
// JSON files {key: value} or [value1, value2, value3]
// JSON.stringify converts a JSON object to a JSON string
// JSON.parse converts a JSON string to a JSON object


// converting JSON object to JSON String
const names = ["Linus", "Melvin", "Sandra", "Laura"];
const namesString = JSON.stringify(names);
console.log(namesString);


const person = {
    "name": "Linus",
    "age": 29,
    "isEmployed": false
}
const personString = JSON.stringify(person);
console.log(personString);


const people = [{
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
}];

const peopleString = JSON.stringify(people);
console.log(peopleString);


// converting JSON String to JSON object
const jsonNames = `["Linus", "Melvin", "Sandra", "Laura"]`;
const parsedNames = JSON.parse(jsonNames);
console.log(parsedNames);


const jsonPerson = `{
    "name": "Linus",
    "age": 29,
    "isEmployed": false
}`
const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);


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

// Using Fetch
fetch("people.JSON")
    .then(response => response.json())
    .then(value => value.forEach((person) => {
        console.log(person);
    }));


// Saving to local storage;
const cars = ["mazda", "BMW", "Auris", "Volvo"];
const carsToJSON = JSON.stringify(cars);
localStorage.setItem("carsToJSON", carsToJSON);

// retrieving from Local Storage
const savedCars = localStorage.getItem("carsToJSON");
const JSONToCars = JSON.parse(carsToJSON);
console.log(JSONToCars);