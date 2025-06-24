# objects
an object is a collection of related properties and/or methods.  

## Basic Syntax
```javascript
const objectName = {
  key1: value1,
  key2: value2,
  key3: value3,
  ...
};
```

## I practiced objects using the example below:
### Example:
```javascript
const person = {
    firstName: "Linus",
    lastName: "Bwana",
    age: 20,
    isEmployed: true,
        carDetails: {
        colour: "black",
        model: "Audi",
        driver: () => {console.log("My driver is Caleb")},
    },
    sayHello: () => console.log(`I am Linus`),
    eat: () => console.log(`I am eating pizza`),
};
person.middleName = "Ogero"
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();
person.eat();
console.log(person);
console.log(person["lastName"]);
console.log(person.carDetails.model);
person.carDetails.driver();
```

### Explanation of the Code:
```javascript
const person = {
    firstName: "Linus",
    lastname: "Bwana",
    age: 20,
    isEmployed: true,
}
```
I defined an *object* named *person*.  
It has basic properties: *firstName, lastname, age, isEmployed.*  

#### Nested Object: carDetails
```javascript
carDetails: {
    colour: "black",
    model: "Audi",
    driver: () => {console.log("My driver is Caleb")},
},
```
*carDetails* is a nested object within person.  
It has its own properties: *colour, model, and a method* called driver which is an arrow function that logs a message.  

#### Methods on the Object
```javascript
sayHello: () => console.log(`I am Linus`),
eat: () => console.log(`I am eating pizza`),
```

#### Adding a New Property
```javascript
person.middleName = "Ogero";
```
Dynamically adds a new key-value pair to the *person* object: *middleName: "Ogero"*.

### Console Output
```javascript
console.log(person.age);             // Output: 20
console.log(person.isEmployed);      // Output: true
person.sayHello();                   // Output: I am Linus
person.eat();                        // Output: I am eating pizza
console.log(person);                 // Displays the full object
console.log(person["lastName"])      // Output: Bwana
console.log(person.carDetails.model);// Output: Audi
person.carDetails.driver();          // Output: My driver is Caleb
```

## What I Demonstrated in the example above
- I created a JavaScript *object* with multiple properties  
- Included a nested object *(carDetails)* inside the main object
- Used *arrow functions* as *methods* (sayHello, eat, driver)
- Dynamically added a new property (middleName) after object creation
- Accessed values using *dot notation*
- Accessed the values using the *bracket notation*.
- Invoked methods to print custom messages
- Printed the entire object and specific nested values 