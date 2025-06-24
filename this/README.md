# this
this is a reference to the object where it is used. (the object depends on the immediate context)  

## I practiced this using the example below:
### Example:
```javascript
const person = {
    firstName: "Linus",
    favFood: "Pizza",
    age: 20,
    isEmployed: true,
        carDetails: {
        colour: "black",
        model: "Audi",
        driver: function(){console.log(`${person.firstName} bought ${this.colour} car`)},
    },
    sayHello: function(){console.log(`My name is ${this.firstName}. I am ${this.age} years old.`)},
    eat: function(){console.log(`I am eating ${this.favFood}`)},
};
person.sayHello();
person.eat();
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
- I created an object *person* with basic properties like *firstName, favFood, age, and isEmployed.*

#### Nested Object: carDetails
```javascript
carDetails: {
    colour: "black",
    model: "Audi",
    driver: function(){
        console.log(`${person.firstName} bought ${this.colour} car`)
    },
},
```
- *driver* is a *method* inside the nested object *carDetails*.
- *this.colour* here refers to *carDetails.colour*. Works perfectly because *this* inside *driver()* refers to *carDetails*.
- *person.firstName* is accessed directly by name from the outer object.  

#### Note
Using *person.firstName* works, but it couples the method tightly to the variable name *person*. If the object name changes, the method will break.

### Top-Level Methods Using *this*
```javascript
sayHello: function(){
    console.log(`My name is ${this.firstName}. I am ${this.age} years old.`);
},
eat: function(){
    console.log(`I am eating ${this.favFood}`);
},
```
- *this* correctly refers to the person object because I am calling *person.sayHello()* and *person.eat()*.  
- *this.firstName*, *this.age*, and *this.favFood* are all resolved from the *person* object context.  

### Console Output
```javascript
person.sayHello();             // Output: My name is Linus. I am 20 years old.
person.eat();                  // Output: I am eating Pizza
person.carDetails.driver();    // Output: Linus bought black car
```

## What I Demonstrated in the example above
- I created an object with both data and methods  
- Nested an object (*carDetails*) inside another (*person*)
- Used *this* to refer to the current object context
- Combined object referencing (*person.firstName*) and *this.colour*
- Understood how *this* behaves differently depending on where it's called