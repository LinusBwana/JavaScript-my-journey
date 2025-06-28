# nested objects
nested objects - objects inside other objects  
child object inside parent object   

## I practiced nested objects using the examples below:
### Example 1:
```javascript
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
```

#### Console Ouput
```javascript
console.log(person.fullName);          // Linus Bwana
console.log(person.isStudent);         // true
console.log(person.hobbies);           // ["football","cooking","swimming"]
console.log(person.hobbies[0]);        // football
console.log(person.address);           // {code:264,address:618,street:"Clay City",…}
console.log(person.address.street);    // Clay City
console.log(Object.keys(person));      // ["fullName","age","isStudent","hobbies","address"]
console.log(Object.keys(person.address)); // ["code","address","street","town","country"]
console.log(key);                      // code, address, street, town, country
```

### What I Did
- I created a *person* object with properties like *fullName, age, and isStudent*, and added a nested object *address* inside it.   
This helped me organize related data (like location) under one parent object.
- I included an array *hobbies*, and accessed individual items using *hobbies[0]*.  
This showed how to reach deeply nested values using dot and bracket notation.
- I used *Object.keys(person)* and *Object.keys(person.address)* to list the keys at both the top level and inside the nested object.  
This gave me a programmatic way to explore object structure without manually checking.
- I looped through *person.address* using a *for...in loop*.  
This allowed me to dynamically access and inspect all nested address fields (like street, town, etc.).

### Example 2:
```javascript
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
                        "Ruarka",
                        "Kenya");

console.log(guest.name);
console.log(guest.age);
console.log(guest.address);
console.log(guest.address.city);
```

#### Console Ouput
```javascript
console.log(guest.name);     // Linus
console.log(guest.age);      // 29
console.log(guest.address);  // Address {street:"Clay City", city:"Ruaraka", country:"Kenya"}
console.log(guest.address.city); // Ruaraka
```

### What I Did
- I created a *Guest* class that accepts *name, age, and address* parts using a *...rest parameter*.  
This allowed the constructor to accept a variable number of address arguments cleanly.
- I passed the collected *...address* values to the Address class using the *spread operator*.  
This helped me reuse the values without rewriting or hardcoding their positions.
- I structured *Guest* to contain an instance of *Address* inside it.  
This shows composition in object-oriented design. Separating “who” a person is from “where” they live.
- I used console.log to confirm the structure worked and that each nested part could be accessed as expected.  
This validated that the class composition and parameter handling were implemented correctly

## What I learnt from the two examples
- How to access and loop through data inside nested objects.
- How *Object.keys()* helps inspect both parent and child objects.
- How the *rest parameter* gathers many arguments into one array-like variable.
- How the *spread operator* expands that array back into individual arguments—perfect for passing data down to another constructor.
- Why class composition keeps code modular and readable when objects become complex.