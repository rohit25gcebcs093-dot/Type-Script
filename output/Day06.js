"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ANY TYPE
var value = "Rohit";
value = 10;
value = ["Rohit"];
value = true;
console.log(value);
//UNKNOWN TYPE
var value1 = "Rohit";
value1 = 20;
value1 = ["My name is Rohit"];
value1 = false;
if (typeof value1 == "string") {
    console.log(value1.toUpperCase());
}
console.log(value1);
//FUNCTION TYPE
function fruits() {
    return "Mango";
}
function simple() {
    return true;
}
function complex() {
    let data = 10;
    let name = "Rohit";
    let type = 'age';
    if (type == 'age') {
        return data;
    }
    else {
        return name;
    }
}
function anything() {
    return "ROHIT";
}
//NEVER TYPE
function loopfunction() {
    while (true) {
        console.log("loop");
    }
}
//FUNCTION PARAMETER TYPE
function totalPrice(item, price) {
    console.log("total price is:" + price * item);
}
totalPrice(50, 100);
totalPrice(100, 100);
//OR
function totalPrice1(item, price, text) {
    if (text) {
        console.log(text + price * item);
    }
    else {
        console.log(price * item);
    }
}
totalPrice1(50, 100, "Total amount is");
totalPrice1(100, 100);
function simple1(data) {
    console.log(data);
}
simple1(true);
//# sourceMappingURL=Day06.js.map