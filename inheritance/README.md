# inheritance

## I practiced inheritance using the example below:
```javascript
class Animal{
    alive = true;
 
    eat(){
        console.log(`This ${this.name} is eating`);
    };
    static sleep(){
        console.log(`This ${this.name} is sleeping`);
    };
};

class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
};
class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
};
class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
};

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
Rabbit.sleep();

console.log(fish.alive);
fish.eat();
Fish.sleep();

console.log(hawk.alive);
hawk.eat();
Hawk.sleep();

rabbit.run();
fish.swim();
hawk.fly();

Animal.sleep();
const animal = new Animal();
animal.eat();
```

### Console Output
```javascript
// 1. Rabbit
console.log(rabbit.alive);   // true
rabbit.eat();                // This Rabbit is eating
Rabbit.sleep();              // This Rabbit is sleeping

// 2. Fish
console.log(fish.alive);     // true
fish.eat();                  // This Fish is eating
Fish.sleep();                // This Fish is sleeping

// 3. Hawk
console.log(hawk.alive);     // true
hawk.eat();                  // This Hawk is eating
Hawk.sleep();                // This Hawk is sleeping

// 4. Individual abilities
rabbit.run();                // This Rabbit is running
fish.swim();                 // This Fish is swimming
hawk.fly();                  // This Hawk is flying

// 5. Base-class calls without a name property
Animal.sleep();              // This Animal is sleeping
const animal = new Animal();
animal.eat();                // This undefined is eating
```

### Explanation of the Code:
- **I created a base class** *Animal* with an alive field and an *eat()* method so that all animals can inherit common behavior and state.
- I added a *static sleep()* **method** to *Animal* so that sleeping is handled at the class level, not the instance level. This demonstrates how static methods belong to the class itself, not to each object.
- I **extended** *Animal* into three subclasses: *Rabbit, Fish,* and *Hawk*, each with their own *name* field and a unique method (*run, swim, fly*) so that each animal can perform a behavior specific to its kind.
- I used public class fields *(alive, name*) instead of using constructors so that the code is shorter and easier to read, while still maintaining object state.
- **I created instances of each animal** (*rabbit, fish, and hawk*) and called both inherited (*eat*) and subclass-specific methods (*run, swim, fly*) so that I could test inheritance and polymorphism in action.
- I called the *sleep()* method using both *Animal.sleep()* and subclass names like *Rabbit.sleep()* to show how static methods can be accessed through the class but not through individual instances.
- **I created a plain** *Animal* instance and called *eat()* and *sleep()* on it to highlight what happens when properties like name are not defined. This causes *undefined* to appear in the console output.

## What I Demonstrated in the example above
### Inheritance in JavaScript Classes
I created a base class *Animal* and extended it into *Rabbit, Fish,* and *Hawk*, demonstrating how subclasses inherit properties and methods from a parent class using the *extends* keyword.

### Use of Instance vs Static Methods
- I used *eat()* as an instance method. It works on individual objects like *rabbit.eat().*  
- I used *sleep()* as a static method. It works only on the class itself like *Rabbit.sleep()*, not on object instances.

### Public Class Fields
I defined *alive = true* and *name = "Rabbit"* directly inside the class using public class fields, showing a modern way to assign default values to instances without writing a constructor.

### Polymorphism
Each subclass had a unique method *(run(), swim(), or fly())*, proving that while all animals share common behavior *(eat() and alive)*, they also have their own specialized actions.

### *this.name* and Undefined Output
I showed what happens when an instance (like the base Animal) doesn’t define *name*. When *this.name* is accessed in such cases, it prints *undefined*. Important for debugging and understanding object context.

### Instantiating and Using Subclasses
I demonstrated how to create instances using *new*, invoke both inherited and unique methods, and confirm that inherited properties like *alive* are available across all subclasses.