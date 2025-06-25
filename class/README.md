# class
A class in JavaScript is a *template (or blueprint)* for creating objects with shared structure and behavior.  
It allows us to define properties and methods that every object created from that class will have.  

### What I Did:
I created a **JavaScript class** called *Product* to model real-world items with a name and a price. This class includes methods to display product details and calculate the total cost including tax.

## I demostrated my understaning of JavaScript classes by coming up with the example below:
### Example:
```javascript
class Product{
    constructor(name, price){
        this.name = name,
        this.price = price
    }

    displayProduct(){
        console.log(`Product: ${this.name}`),
        console.log(`Price: Ksh${this.price}`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
};

const salesTax = 0.05;

const product1 = new Product("Shirt", 25.80);
const product2 = new Product("Dress", 19.50);

product1.displayProduct();
product2.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`The total is: Ksh${total.toFixed(2)}`);
```

## Explanation:
### I Defined a Class with a Constructor
```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  .......
}
```
- I used the *constructor* method to initialize each product's *name* and *price*. Every time I create a new product using *new*, these values are automatically assigned to that object via *this*.

### I Added Methods to the Class
```javascript
{
  .......
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: Ksh${this.price}`);
  }

  calculateTotal(salesTax) {
    return this.price + (this.price * salesTax);
  }
}
```
I added two instance methods:
- *displayProduct()* logs the product's name and price.
- *calculateTotal(salesTax)* returns the final price after adding a given percentage of sales tax.  

Both methods use this to access the product’s own properties.

### I Created Instances of the Class
```javascript
const product1 = new Product("Shirt", 25.80);
const product2 = new Product("Dress", 19.50);
```
- I used the *new* keyword to create two product objects: one for a shirt, and one for a dress. Each object now contains its own name, price, and has access to the methods I defined.

### I Displayed and Calculated Product Totals
```javascript
product1.displayProduct();
product2.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`The total is: Ksh${total.toFixed(2)}`);
```
I printed the details of each product using displayProduct(). Then, I calculated the total price of product1 by applying a 5% sales tax and displayed the result formatted to two decimal places using toFixed(2).

## What I learnt from the above demonstration:
1. How to define and use **JavaScript classes** using the *class* keyword.
2. How to set up a **constructor** to initialize properties using this.
3. How to define and use **instance methods** inside a class.
4. The importance of the *this* keyword in referring to the current object.
5. How to create new objects (instances) from a class using the *new* keyword.
6. How to pass arguments to methods and use return values.
7. How to format numerical output using *.toFixed(2)* for currency display.