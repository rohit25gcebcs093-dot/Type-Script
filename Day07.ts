//UNION 
var studentData:string | number | []="Rohit";
studentData=100;
studentData=[];

console.log(studentData);

function fruitsData():string | number | string[] {
    var item=1;
    if(item>1){
        return ['Banana','Mango']
    }else{
        return "Apple"
    }
}

console.log(fruitsData());

function studentInfo(name:string | number | boolean){
    if(typeof name=="string"){
        return ("Name is"+name)
    }else{
        return("New name is"+ name)
    }
}
studentInfo("Rohit");

//USES OF INTERFACE
interface Info{
    name:string;
    age:number;
    college:string;
}

var studentObj:Info={
    name:"Rohit",
    age:30,
    college:"ABC",
}

interface TeacherType extends Info{
    subject:string
} 

var teacherObj:TeacherType={
    name:"Anil",
    age:60,
    college:"ABC",
    subject:"Maths",
}

var managementObj:Info={
    name:"Omkar",
    age:75,
    college:"ABC",
}

//Intersection --> It allows you to combine multiple types into one
type personTA={name:string}
type personTB={age:number}
type personTC=personTA & personTB

var personDataA:personTA={name:'Anil Sidhu'}
var personDatab:personTB={age:30}

var personDatac:personTC={name:'Anil Sidhu',age:30}