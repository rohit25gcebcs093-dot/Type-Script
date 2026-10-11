// Generic in typescript allow you to create 
// reusable components that work with a variety 
// of data types while maintaining type safety.

function fruits10<T>(name:T):T{
    return name
}

function fruitsAny<T>(name:any):any{
    return name
}

// let onlyFruit=fruitsAny("Apple")
// let onlyNum=fruitsAny(100)
// let onlyBool=fruitsAny(true)

let onlyFruit=fruits10("Apple")
let onlyNum=fruits10(100)
let onlyBool=fruits10(true)

function Users17<T>(data:T):T{
    return data
}
let userCollection=Users17([10,20,30])


//KeyOf==>It is used to get the keys of a type
//as a union of a string.
//It is primarily used for type safety when working 
//with objects.

type PersonT={
    name:string,
    age:number,
    isEmp:boolean,
}
let PersonData:PersonT={
    name:'Rohit',
    age:30,
    isEmp:true,
}

type PersonX=keyof PersonT;
//Let PersonDataX:PersonX;
let PersonDataX:keyof PersonT;;
PersonDataX="name";
PersonDataX="age";
PersonDataX="isEmp";

let userX:keyof PersonT="name"

// An Index Signature in typescript allows you to 
// define objects with dynamic keys while specifying
// the type of their CSSFontFeatureValuesRule.

// type userData7Type={
//     [key:string]:number|string
// }
// var userData7:userData7Type={
//     mobile:9999,
//     age:34,
//     marks:100,
//     id:45,
//     semester:3,
// }

type userData7Type={
    name:string,
    id:number,
    mobile:number,
    readonly [key:string]:number|string
}
var userData7:userData7Type={
    name:'Rohit',
    mobile:9999,
    age:34,
    marks:100,
    id:45,
    semester:3,
}
