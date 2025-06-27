# getter and setter
getter is a special method that makes a property readable  
getter is a special method that makes a property writable  
They help us to validate and modify a value when reading/writing a property  

## I practiced getter and setter methods using the examples below:
### Example 1
```javascript
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
```

### Console Output
```javascript
console.log(rectangle.width);   // 12.0cm
console.log(rectangle.height);  // 15.0cm
console.log(rectangle.area);    // 180.0cm²
```

## Explanation of the Code:
I created a *Rectangle* class to demonstrate how setters and getters allow for controlled data access and formatting.

### Setters:
- *set width(newWidth):* Validated that the value is greater than 0. If valid, it stored the value in this._width.  
- *set height(newHeight):* Also validated that the height is greater than 0 before storing it in this._height.
- I used *this._width* and *this._height* as **internal fields** to store the actual values after validation. The underscore prefix (*_*) signals that these fields are **not meant to be accessed or modified directly**, helping encapsulate logic within the class.

### Getters:
- *get width()* and *get height()*: Retrieved the values of *this._width* and *this._height*, formatted to 1 decimal place, and returned them as strings with "cm" appended.
- *get area()*: Dynamically computed the area using *this._width * this._height*, formatted it to 1 decimal place, and added "cm²".
- By using the same private fields (*_width, _height*) in the getters, I ensured that the displayed output **always reflects the current internal state** set through validated input.

This structure allowed me to validate inputs in setters and control formatted output in getters, while maintaining a clean separation between external access and internal data. The use of ._width and ._height made the class more robust and less prone to accidental misuse.

### Example 2
```javascript
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
```

### Console Output
```javascript
console.log(person.firstName);  // Linus
console.log(person.lastName);   // Bwana
console.log(person.fullName);   // Linus Bwana
console.log(person.age);        // 29
```

## Explanation of the Code:
I created a Person class that models a user’s identity details using getters and setters to enforce validation and proper formatting.

### Setters:
- set firstName(newFirstName) and set lastName(newLastName): Checked that the input is a non-empty string before storing it in this._firstName and this._lastName.
- set age(newAge): Validated that the input is a number and is non-negative before assigning it to this._age.
- I used internal fields (_firstName, _lastName, _age) to store the actual validated values, isolating raw data from direct access. The underscore convention helps communicate to other developers that these are internal-only properties and should be accessed through getters.

### Getters:
- *get firstName()* and *get lastName()*: Returned the internal *_firstName* and *_lastName* values.
- *get fullName()*: Combined *_firstName* and *_lastName* into a single string dynamically, demonstrating a **computed property**.
- *get age()*: Returned the validated *_age* value.
- These getters acted as **safe and controlled access points** to read internal data while preserving encapsulation.

Using *._firstName, ._lastName,* and *._age* allowed me to **maintain internal data integrity** while using setters for validation and getters for output formatting or derived values like *fullName*.

## What I Learnt
- I learned how to use **getters** and **setters** to control access to internal data in an object or class.
- I practiced using **underscore-prefixed fields** (like *_width, *_firstName*) to represent private data. While not truly private, this naming convention warns other developers not to access them directly.
- I understood the importance of **validation logic** in setters — e.g., preventing negative dimensions or blank names.
- I saw how **computed properties** (like *area* and *fullName*) can be dynamically calculated using getters, with no need to store them separately.
- Using **_** before field names helps indicate that these properties are **not meant to be accessed directly**. It encourages clean and safe coding practices and reduces accidental overwriting of internal values