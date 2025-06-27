# destructuring
Destructuring - extract values from arrays and objects then assign them to variables in a convenient way  
*[ ]* - to perform array destructuring  
*{ }* - to perform object destructuring  

## I practiced destructuring using the examples below:
### Example:
```javascript
// Swapping Elements in an Array
const colour = ["red", "green", "blue", "black", "white"];
[colour[0], colour[4]] = [colour[4], colour[0]];
console.log(colour);


// Assigning Array Items to Variables
const myColours = ["red", "green", "blue", "black", "white"];
const [firstColour, secondColour, thirdColour, ...extraColours] = myColours;
console.log(firstColour);
console.log(secondColour);
console.log(thirdColour);
console.log(extraColours);


// Extracting Values from an Objec
const person = {
    firstName: "Laura",
    lastName: "Omari",
    age: "35",
};

const {firstName, lastName, age, job="unemployed"} = person;

console.log(firstName);
console.log(lastName);
console.log(job);


// Destructuring in Function Parameters
function displayPerson({firstName, lastName, age, job, country="Kenya"}){
    console.log(`name:${firstName} ${lastName}`);
    console.log(`Age:${age}`);
    console.log(`Job:${job}`);
    console.log(`Country:${country}`);
};

const person1 = {
    firstName: "Linus",
    lastName: "Bwana",
    age: "29",
    job: "Engineer"  
};
displayPerson(person1);
```

### Console Outputs
#### Swapping Elements in an Array
```javascript
["white", "green", "blue", "black", "red"]
```
Using *destructuring*, I swapped the *first* and *last* elements in the *colour* array without a temporary variable.

#### Assigning Array Items to Variables
```javascript
red
green
blue
["black", "white"]
```
I extracted the first three items into their own variables and used the rest operator *...extraColours* to gather the remaining elements into an array.

#### Extracting Values from an Objec
```javascript
Laura
Omari
unemployed
```
I used object destructuring to pull *firstName, lastName*, and *age* directly from the *person* object. Since job was not defined, the default value "*unemployed*" was assigned

#### Destructuring in Function Parameters
```javascript
name:Linus Bwana
Age:29
Job:Engineer
Country:Kenya
```
I destructured the object directly in the function parameter list. This lets me reference the object’s properties inside the function without writing *object.property*. The default value for *country* was used since it wasn't provided.

## What I Learnt
- How to use **array destructuring** to swap values or extract elements cleanly.
- How to use the **rest operator (...)** to gather the remaining items in an array.
- How **object destructuring** works with default values.
- How to **destructure function parameters** to make code more readable and efficient.
- The power of destructuring in reducing boilerplate and making the code cleaner and more expressive.