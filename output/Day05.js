"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ARRAY
var users = ['anil', 'rohit', 'peter'];
var marks = [60, 80, 45];
var students = ['bruce', 'clark', 'diana'];
var data = [75, 90, 55];
students.push('sidhu');
marks.push(100);
data.push(80);
console.log(users);
console.log(marks);
console.log(students);
console.log(data);
//TUPLE
var emp = ['Rohit', '20', true];
var empData = ['Rohit', 30, true];
var empData1 = ['Rohit', 30, true];
empData.push('noida');
console.log(emp);
console.log(empData);
console.log(empData1);
//OBJECT
var userData = {
    name: "Rohit Maddheshiya",
    age: 20,
    company: "ABC Pvt Ltd",
};
userData.age = 25;
console.log(userData);
//If we doesn't know how many objects we implement?
var userData1 = {
    name: 'Rohit Maddheshiya',
    age: 34,
    company: 'undefined',
};
userData1.company = 'XYZ';
userData1.isMarried = false;
console.log(userData1);
//How do you declare a nested datatype
var userData2 = {
    name: "Rohit Maddheshiya",
    age: 20,
    company: "ABC Pvt Ltd",
    address: {
        city: 'noida',
        state: 'UP',
        country: 'India'
    }
};
console.log(userData2);
//# sourceMappingURL=Day05.js.map