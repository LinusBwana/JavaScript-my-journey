# constructors
A constructor is a special method for defining the properties and methods of objects.

## I demostrated my understaning of constructors by coming up with the example below:
### Example:
```javascript
function Car(make, model, year, colour){
    this.make = make,
    this.model = model,
    this.year = year,
    this.colour = colour,
    this.drive = () => console.log(`I am driving ${this.colour} ${this.make} ${this.model}`),
    this.details = {
        seller: "ABC Motors",
        buyer: "My. Linus",
    }
}

const car1 = new Car("Mazda", "Demio", 2025, "black");
const car2 = new Car("Ford", "Ranger", 2024, "wine red");
const car3 = new Car("Audi", "sq5", 2023, "black");

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

console.log(car1.details.seller);
```

## Explanation:
### I created a constructor function called Car
```javascript
function Car(make, model, year, colour) {
  ......
}
```
- I wrote this capital-C function to act as a **blueprint**.
Whenever I run new *Car(...)*, JavaScript builds a fresh object, binds this to it, and runs the code inside this function to initialise that object.

### Inside the constructor, I used *this* to assign properties
```javascript
this.make   = make;
this.model  = model;
this.year   = year;
this.colour = colour;
```
- *this* refers to **the specific car instance** being created.
By assigning these four properties, every car I build gets its own *make, model, year, and colour.*

### I  added a drive method with an arrow function
```javascript
this.drive = () =>
  console.log(`I am driving ${this.colour} ${this.make} ${this.model}`);
```
- I chose an arrow function so it automatically inherits the same *this* that the constructor has, meaning the method always points at the right car and can log its own colour, make, and model without needing to bind anything manually.

### I embedded a nested details object
```javascript
this.details = {
  seller: "ABC Motors",
  buyer : "Mr. Linus"
};
```
- I grouped the extra information (who’s selling and who’s buying) in one tidy sub-object called *details*, giving each car richer, structured data.

### I created three distinct car instances with *new*
```javascript
const car1 = new Car("Mazda", "Demio", 2025, "black");
const car2 = new Car("Ford",  "Ranger", 2024, "wine red");
const car3 = new Car("Audi",  "SQ5",   2023, "black");
```
- I used the new keyword to trigger all the steps above for each set of arguments, so *car1, car2, and car3* come out as **independent objects** holding their own data and methods.

### I interacted with those objects to verify everything works
```javascript
console.log(car1);       // I inspected the objects car1, car2 and car3
console.log(car2);
console.log(car3);

car1.drive();            // I am driving black Mazda Demio
car2.drive();            // I am driving wine red Ford Ranger
car3.drive();            // I am driving black Audi SQ5

console.log(car1.details.seller); // ABC Motors
```
- I printed each whole object to confirm their structure.  
- Called the drive method on each to ensure the arrow function sees the right *this*.
- Accessed a nested property (*seller*) to prove I can dig into the *details* object.

## What I learnt from the above demonstration:
1. Use of **constructor functions** for object creation.
2. How the *this* **keyword** refers to the object being created.
3. Storing methods using arrow functions that maintain the correct *this*.
4. Creating and accessing **nested objects** inside instances.
5. Creating multiple distinct instances from the same constructor.