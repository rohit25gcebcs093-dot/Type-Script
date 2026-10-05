"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empData1 = {
    name: "Rohit",
    email: 'Rohit@123.gmail.com'
};
var studentData1 = {
    name: "Anil",
    email: 'Anil@123.gmail,com'
};
//ENUM
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labstaff"] = "labstaff";
})(whoType || (whoType = {}));
var who = whoType.teacher;
who = whoType.teacher;
console.log(whoType.management);
var Fruit;
(function (Fruit) {
    Fruit["a"] = "Apple";
    Fruit["b"] = "Banana";
    Fruit["c"] = "Mango";
})(Fruit || (Fruit = {}));
var myFruit = Fruit.a;
myFruit = Fruit.c;
console.log(myFruit);
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["manager"] = 1] = "manager";
    Roles[Roles["qa"] = 2] = "qa";
    Roles[Roles["developer"] = 3] = "developer";
    Roles[Roles["user"] = 4] = "user";
})(Roles || (Roles = {}));
var userRoles = Roles.qa;
console.log(userRoles);
//# sourceMappingURL=Day08.js.map