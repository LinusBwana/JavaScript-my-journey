# super
super is a keyword used in class-based inheritance. It allows us to call the parent class constructor and call methods from the parent class

## Illustration
### 1. Call the parent class constructor
Used inside a subclass constructor to initialize the parent class:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls Animal's constructor
    this.breed = breed;
  }
}
```

### 2. Call methods from the parent class
Used inside subclass methods to invoke the parent version:
```javascript
class Animal {
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Cat extends Animal {
  speak() {
    super.speak(); // calls Animal's speak()
    console.log(`${this.name} meows`);
  }
}
```

## I practiced super keyword using the example below:
```javascript
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`)
    };
};

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    };    
};

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    };
};

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);;
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    };
};

const rabbit = new Rabbit("rabbit", 2, 4);
const fish = new Fish("fish", 5, 10);
const hawk = new Hawk("hawk", 10, 20);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();
```

### Console Output
```javascript
// property checks
console.log(rabbit.name);      // rabbit
console.log(rabbit.age);       // 2
console.log(rabbit.runSpeed);  // 4

console.log(fish.name);        // fish
console.log(fish.age);         // 5
console.log(fish.swimSpeed);   // 10

console.log(hawk.name);        // hawk
console.log(hawk.age);         // 10
console.log(hawk.flySpeed);    // 20

// behaviour-method calls
rabbit.run();  // This rabbit can run
               // This rabbit moves at a speed of 4mph

fish.swim();   // This fish can swim
               // This fish moves at a speed of 10mph

hawk.fly();    // This hawk can fly
               // This hawk moves at a speed of 20mph
              // This undefined is eating
```

## Explanation of the Code:
#### I defined a reusable parent class *Animal*.
- Its constructor stores common properties (name, age) and the move() method prints a speed message.

#### I created three child classes: *Rabbit, Fish,* and *Hawk*.*
- In each constructor I call *super(...)* so I inherit *name and age, then add a class-specific speed *(runSpeed, swimSpeed, flySpeed).*

#### I overrode behaviour with specialised methods (run, swim, fly).
- Inside each method I first log an ability sentence, then call *super.move()* to reuse the parent logic for printing the speed.

#### I instantiated every class and proved inheritance works.
- By logging the properties and calling their ability methods I showed that each object carries its own data and the shared *move()* behaviour.

## What I demonstrated in the example above
- I demonstrated how to **use class inheritance** in JavaScript by having *Rabbit, Fish*, and *Hawk* extend a common *Animal* base class.
- I showed how to **reuse shared behavior** (movement logic) through the *super* keyword, promoting code reuse and reducing duplication.
- I illustrated how **subclasses can have their own unique properties and methods** (*runSpeed, swimSpeed, flySpeed*), while still inheriting and using base class functionality.
- I applied **object-oriented principles** like encapsulation and inheritance to organize related behaviors and data across different animal types.
- I proved that **method overriding** and invoking parent methods from subclasses can be done cleanly in modern JavaScript using ES6 class syntax.