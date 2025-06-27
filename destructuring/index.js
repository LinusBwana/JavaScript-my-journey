// destructuring - extract values from arrays and objects then assign them to variables in a convenient way
// [] - to perform array destructuring
// {} - to perform object destructuring

// assigning array elements to variables
const colour = ["red", "green", "blue", "black", "white"];
[colour[0], colour[4]] = [colour[4], colour[0]];
console.log(colour);

const myColours = ["red", "green", "blue", "black", "white"];
const [firstColour, secondColour, thirdColour, ...extraColours] = myColours;
console.log(firstColour);
console.log(secondColour);
console.log(thirdColour);
console.log(extraColours);


// extracting values from objects
const person = {
    firstName: "Laura",
    lastName: "Omari",
    age: "35",
};

const {firstName, lastName, age, job="unemployed"} = person;

console.log(firstName);
console.log(lastName);
console.log(job);


// destructure in functions
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