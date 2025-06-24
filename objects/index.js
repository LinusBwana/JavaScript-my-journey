// an objecyt is a collection of related properties and/or methods.
// object = {key: value, function()}

// example
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
console.log(person["lastName"])
console.log(person.carDetails.model);
person.carDetails.driver();