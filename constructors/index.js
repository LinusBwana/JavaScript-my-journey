// a constructor is a special method for defining the properties and methods of objects.


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
