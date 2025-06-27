// getter is a special method that makes a property readable
// getter is a special method that makes a property writable
// validate and modify a value when reading/writing a property

// example 1
class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be greater than zero");
        }
    };
    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else{
            console.error("Height must be greater than zero");
        }
    };

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._height * this._width).toFixed(1)}cm²`;
    }
}

const rectangle = new Rectangle(4, 7);

rectangle.width = 12;
rectangle.height = 15;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


// example 2

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty");
        }
    };
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty");
        }
    };
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age name must be a non-negative number");
        }
    };

    get firstName(){
        return this._firstName;
    };
    get lastName(){
        return this._lastName;
    };
    get fullName(){
        return this._firstName + " " + this._lastName;
    };
    get age(){
        return this._age;
    };
}; 

const person = new Person("Linus", "Bwana", 29);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);