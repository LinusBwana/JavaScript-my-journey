// a class (ES^6 features) provides a more structured and cleaner way of to work with objects compared to the traditional constructor functions
// ex. static keyword, encapuslation, inheritance

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