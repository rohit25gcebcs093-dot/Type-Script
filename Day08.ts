//TYPE datatype
type DataType={name:string,email:string}
type a={name:string}
type b={email:string}

type c=a|b;

var empData1:DataType={
    name:"Rohit",
    email:'Rohit@123.gmail.com'
}

var studentData1:DataType={
    name:"Anil",
    email:'Anil@123.gmail,com'
}

//ENUM
enum whoType{
    student="student",
    teacher="teacher",
    management="management",
    labstaff="labstaff",
}
var who:whoType=whoType.teacher;
who=whoType.teacher

console.log(whoType.management);

enum Fruit{
    a="Apple",
    b="Banana",
    c="Mango"
}
var myFruit:Fruit=Fruit.a
myFruit=Fruit.c

console.log(myFruit);

enum Roles{
    admin,
    manager,
    qa,
    developer,
    user
}
var userRoles:Roles=Roles.qa;
console.log(userRoles);