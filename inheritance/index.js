// inheritance allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps in code reusability

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