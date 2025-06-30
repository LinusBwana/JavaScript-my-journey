// sort() is a method used to sort elements of an array in place. 
// sorts elements as strings in lexicographic order, not alphabetical
// lexicographic - (alphabet + numbers + symbols) as strings

// strings
const fruits = ["mango", "banana", "apple", "guava", "pineapple", "watermelom"];

fruits.sort();
console.log(fruits);


// intergers
const numbers = [1, 8, 3, 6, 4, 8, 9, 10, 5, 2];

numbers.sort((a, b) => a - b);
console.log(numbers); 


// array of objects
const people = [{name: "Linus", age: 29, grade: "First Class"},
                {name: "Laura", age: 32, grade: "Second Class Upper"},
                {name: "Moses", age: 35, grade: "Second Class Lower"},
                {name: "Martin", age: 25, grade: "pass"},
];

people.sort((a, b) => a.age - b.age);
console.log(people);


// array of objects example 2
const students = [{name: "Linus", age: 29, grade: "First Class"},
                {name: "Laura", age: 32, grade: "Second Class Upper"},
                {name: "Moses", age: 35, grade: "Second Class Lower"},
                {name: "Annette", age: 18, grade: "pass"},
                {name: "Virginia", age: 23, grade: "Second Class Lower"},
                {name: "Martin", age: 25, grade: "pass"},
];

students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);