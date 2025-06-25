// static - is a keyword that defines properties or methods that belong to a class itself rather than the object created from that class
// class owns anything static and not the the object

// example 1
class MathUtilities{
    static PI = 3.14159

    static getDiamater(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return (this.PI * radius * 2).toFixed(2);
    }
    static getArea(radius){
        return (this.PI * radius * radius).toFixed(2);
    }
}
console.log(MathUtilities.PI);
console.log(MathUtilities.getDiamater(15));
console.log(MathUtilities.getCircumference(7));
console.log(MathUtilities.getArea(18));


// example 2
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount ++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`My username is ${this.username}`);
    }
}

const user1 = new User("Linus");
const user2 = new User("Annette");
const user3 = new User("Laura");

user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

User.getUserCount();
console.log(User.userCount);

