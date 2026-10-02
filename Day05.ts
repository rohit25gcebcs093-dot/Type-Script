//ARRAY
var users:string[]=['anil','rohit','peter']
var marks:number[]=[60,80,45]
var students:Array<string>=['bruce','clark','diana']
var data:Array<number>=[75, 90, 55]

students.push('sidhu')
marks.push(100)
data.push(80)

console.log(users)
console.log(marks)
console.log(students)
console.log(data)

//TUPLE
var emp=['Rohit','20',true]
var empData:[string,number,boolean]=['Rohit',30,true]
var empData1 :readonly[string,number,boolean]=['Rohit',30,true]

empData.push('noida')
console.log(emp)
console.log(empData)
console.log(empData1)

//OBJECT
var userData:{
    name:string,
    age:number,
    company:string,

}={
    name:"Rohit Maddheshiya",
    age:20,
    company:"ABC Pvt Ltd",

}
userData.age=25;
console.log(userData);

//If we doesn't know how many objects we implement?
var userData1:{
    [key:string]:string|number|boolean;
}={
    name:'Rohit Maddheshiya',
    age:34,
    company:'undefined',
}
userData1.company='XYZ'
userData1.isMarried=false
console.log(userData1);

//How do you declare a nested datatype
var userData2:{
    name:string,
    age:number,
    company:string,
    address:{}

}={
    name:"Rohit Maddheshiya",
    age:20,
    company:"ABC Pvt Ltd",
    address:{
        city:'noida',
        state:'UP',
        country:'India'
    }

}
console.log(userData2);