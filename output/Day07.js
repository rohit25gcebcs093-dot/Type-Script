"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//UNION 
var studentData = "Rohit";
studentData = 100;
studentData = [];
console.log(studentData);
function fruitsData() {
    var item = 1;
    if (item > 1) {
        return ['Banana', 'Mango'];
    }
    else {
        return "Apple";
    }
}
console.log(fruitsData());
function studentInfo(name) {
    if (typeof name == "string") {
        return ("Name is" + name);
    }
    else {
        return ("New name is" + name);
    }
}
studentInfo("Rohit");
var studentObj = {
    name: "Rohit",
    age: 30,
    college: "ABC",
};
var teacherObj = {
    name: "Anil",
    age: 60,
    college: "ABC",
    subject: "Maths",
};
var managementObj = {
    name: "Omkar",
    age: 75,
    college: "ABC",
};
var personDataA = { name: 'Anil Sidhu' };
var personDatab = { age: 30 };
var personDatac = { name: 'Anil Sidhu', age: 30 };
//# sourceMappingURL=Day07.js.map