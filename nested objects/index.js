// nested objects - objects inside other objects
// child object inside parent object

// example 1
const person = {
    fullName: "Linus Bwana",
    age: 30,
    isStudent: true,
    hobbies: ["football", "cooking", "swomming"],
    address: {
        code: 264,
        address: 618,
        street: "Clay City",
        town: "Ruaraka",
        country: "Kenya",
    },
};

console.log(person.fullName);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.address);
console.log(person.address.street);
console.log(Object.keys(person));
console.log(Object.keys(person.address));

// looping through a nested object
for(const values in person.address){
    console.log(values);
};

// example 2
class Guest{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    };
};
class Address{
     
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country
    };
};

const guest = new Guest("Linus", 29,
                        "Clay City",
                        "Ruaraka",
                        "Kenya");

console.log(guest.name);
console.log(guest.age);
console.log(guest.address);
console.log(guest.address.city);