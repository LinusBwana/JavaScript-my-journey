# sort
**sort()** is a method used to sort elements of an array in place.  
sorts elements as strings in **lexicographic** order, **not alphabetical.**  
*lexicographic* - (alphabet + numbers + symbols) as strings.  

## I practiced sort method using the examples below:
### Example 1:
I sorted an array of fruit names in alphabetical (lexicographic) order using the default sort() method.
```javascript
// strings
const fruits = ["mango", "banana", "apple", "guava", "pineapple", "watermelom"];

fruits.sort();
console.log(fruits);
```

#### Console Ouput
####
```javascript
['apple', 'banana', 'guava', 'mango', 'pineapple', 'watermelom']
```

### Example 2:
I sorted a list of numbers in ascending order by providing a compare function: (a, b) => a - b.
```javascript
const numbers = [1, 8, 3, 6, 4, 8, 9, 10, 5, 2];

numbers.sort((a, b) => a - b);
console.log(numbers); 
```

#### Console Ouput
####
```javascript
[1, 2, 3, 4, 5, 6, 8, 8, 9, 10]
```

### Example 3:
I sorted an array of people objects by their age in ascending order.
```javascript
// array of objects
const people = [{name: "Linus", age: 29, grade: "First Class"},
                {name: "Laura", age: 32, grade: "Second Class Upper"},
                {name: "Moses", age: 35, grade: "Second Class Lower"},
                {name: "Martin", age: 25, grade: "pass"},
];

people.sort((a, b) => a.age - b.age);
console.log(people);
```

#### Console Ouput
####
```javascript
[
  { name: 'Martin', age: 25, grade: 'pass' },
  { name: 'Linus',  age: 29, grade: 'First Class' },
  { name: 'Laura',  age: 32, grade: 'Second Class Upper' },
  { name: 'Moses',  age: 35, grade: 'Second Class Lower' }
]
```

### Example 4:
I sorted student records alphabetically by their names using the localeCompare() method for better accuracy.
```javascript
const students = [{name: "Linus", age: 29, grade: "First Class"},
                {name: "Laura", age: 32, grade: "Second Class Upper"},
                {name: "Moses", age: 35, grade: "Second Class Lower"},
                {name: "Annette", age: 18, grade: "pass"},
                {name: "Virginia", age: 23, grade: "Second Class Lower"},
                {name: "Martin", age: 25, grade: "pass"},
];

students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);
```

#### Console Ouput
####
```javascript
[
  { name: 'Annette',  age: 18, grade: 'pass' },
  { name: 'Laura',    age: 32, grade: 'Second Class Upper' },
  { name: 'Linus',    age: 29, grade: 'First Class' },
  { name: 'Martin',   age: 25, grade: 'pass' },
  { name: 'Moses',    age: 35, grade: 'Second Class Lower' },
  { name: 'Virginia', age: 23, grade: 'Second Class Lower' }
]
```

## What I learnt from the examples
1. I understood that the default *sort()* method treats elements as strings.
2. I learnt to write my own compare functions for numeric and object-based sorting.
3. I used **localeCompare()** to handle name sorting in a human-friendly way.