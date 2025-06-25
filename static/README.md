# static
static - is a keyword that defines properties or methods that belong to a class itself rather than the object created from that class  
class owns anything static and not the the object 

## I practiced static keyword using the examples below:
### Example 1:
```javascript
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
```

#### output:
```javascript
console.log(MathUtilities.PI);              // 3.14159
console.log(MathUtilities.getDiamater(15)); // 30
console.log(MathUtilities.getCircumference(7)); // 43.98
console.log(MathUtilities.getArea(18));         // 1017.88
```

### Explanation of the code:
- I created a class called *MathUtilities* to hold math-related utilities like PI, diameter, circumference, and area.
- I used the *static* keyword so that I could call all properties and methods **directly on the class**, without creating any object instance.
- I declared a static property *PI* and gave it the value 3.14159 so that I could reuse it in all circle calculations.
- I added a static method *getDiameter(radius)* so that the code can return the diameter of a circle by simply multiplying the radius by 2.
- I added a static method *getCircumference(radius)* so that the code can return the circumference using the formula *this.PI * radius * 2*, and I used *this.PI* to refer to the static *PI* within the class.
- I added a static method *getArea(radius)* to return the area of a circle using the formula *this.PI * radius * radius*, formatted to 2 decimal places using .*toFixed(2)*.
- I logged all the methods to the console so I could confirm the calculations worked without needing to instantiate the class.

### Example 2:
```javascript
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
```

#### output:
```javascript
user1.sayHello(); // My username is Linus
user2.sayHello(); // My username is Annette
user3.sayHello(); // My username is Laura

console.log(user1.username); // Linus
console.log(user2.username); // Annette
console.log(user3.username); // Laura

User.getUserCount(); // There are 3 users online
console.log(User.userCount); // 3
```

### Explanation of the Code:
- I created a class called User to model users, each with a unique *username*.
- I used a *static* property *userCount = 0* so that the class can keep track of how many users have been created.
- I added a *constructor(username)* method so that each time I create a new user, it stores their username in *this.username*, and then increments the global *userCount* by 1.
- I created a static method *getUserCount()* so that the code can print out how many users exist without needing an instance.
- I created an instance method *sayHello()* so each user object can introduce itself using its own *username*.
- I instantiated three users *(user1, user2, and user3)* using the *new* keyword so that each user object has its own data.
- I called *sayHello()* on each user so that they could introduce themselves using their unique username.
- I accessed *User.userCount *and called *User.getUserCount()* so that I could confirm the static counter worked as expected.

## What I learnt from the examples demonstrated above
1. How to declare static properties and methods so they live on the class, not on each object.
2. How this inside a static context refers to the class, while inside an instance method it refers to the current object.
3. How to blend static and instance logic in one class—for example, tracking how many objects have been created.
4. When to choose utility-only classes (all static) versus regular classes with per-object state.