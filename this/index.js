// this - a reference to the object where it is used. (the object depends on the immediate context)
// person.name = this.name()

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