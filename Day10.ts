class EmpInfo{
    _name:string="Rohit";
    _email:string="rohit@test.com";

    get name():string{
        return "MR. "+this._name;
    }

    set email(val:string){
        this._email="emp_"+val;
    }
}

var emp1=new EmpInfo();
emp1.email="peter@test.com";
console.log(emp1._email);

//TYPEGUARD=In typescript, this is the technique
//used to narrow down the type of a variable 
//within a conditional block.

let userData20:number|string|boolean="Rohit"

userData20=true
if(typeof userData20 =="boolean"){
    console.log('this is bool data type');
}
else if(typeof userData20=="string"){
    console.log('this is a string data type');
}else{
    console.log('this is a number');
}

function checkDataType(data:string|number){
    if(typeof data=='number'){
        console.log("This is a number.")
    }else{
        console.log("This is a string")
    }
}
checkDataType(29)
