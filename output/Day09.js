"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classes
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `Product ${this.name} is ordered in ${this.price}`;
        }
        else {
            return "No product in cart";
        }
    }
}
const product = new Product("Samsung", 100000, 101);
product.addToCart();
console.log(product.buyProduct());
//Inheritance
class Student {
    login(name, password) {
        if (name && password) {
            return "Student Login";
        }
        else {
            return "Not login";
        }
    }
    result(marks) {
        if (marks > 33) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
}
var s1 = new Student();
console.log(s1.result(60));
//# sourceMappingURL=Day09.js.map