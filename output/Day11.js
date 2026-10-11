"use strict";
// Generic in typescript allow you to create 
// reusable components that work with a variety 
// of data types while maintaining type safety.
Object.defineProperty(exports, "__esModule", { value: true });
function fruits10(name) {
    return name;
}
function fruitsAny(name) {
    return name;
}
// let onlyFruit=fruitsAny("Apple")
// let onlyNum=fruitsAny(100)
// let onlyBool=fruitsAny(true)
let onlyFruit = fruits10("Apple");
let onlyNum = fruits10(100);
let onlyBool = fruits10(true);
function Users17(data) {
    return data;
}
let userCollection = Users17([10, 20, 30]);
let PersonData = {
    name: 'Rohit',
    age: 30,
    isEmp: true,
};
//Let PersonDataX:PersonX;
let PersonDataX;
;
PersonDataX = "name";
PersonDataX = "age";
PersonDataX = "isEmp";
let userX = "name";
var userData7 = {
    name: 'Rohit',
    mobile: 9999,
    age: 34,
    marks: 100,
    id: 45,
    semester: 3,
};
//# sourceMappingURL=Day11.js.map