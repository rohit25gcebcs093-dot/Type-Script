namespace UserNameSpace{
    export class Auth{
        login(){
            console.log("user login function")
        }
    }
    export function getList(){
        console.log("List of users",apiURL);
    }
    const apiURL="www.google,com"
}

namespace AdminNameSpace{
    class Auth{
        login(){
            console.log("user login function")
        }
    }
    function getList(){
        console.log("List of users");
    }
}

var user8=new UserNameSpace.Auth()
user8.login()
UserNameSpace.getList()

// Decorators are the specialkind if decalaration that can be attached
// to classes,methods , properties or parameters to modify their behavoiur.

function classLogger(constructor:Function){
    console.log(constructor.name);
}
function getKeyDetails(target:any,key:any){
    console.log(key.name)
}

@classLogger
class CustomMaths{
    @getKeyDetails
    private value1:number;
    value2:number;
    constructor(x:number,y:number){
        this.value1=x;
        this.value2=y;
    }
}

var cm1=new CustomMaths(10,20);

//Promise 
function complexLogic(){
    return new Promise((resolved)=>{
        setTimeout(()=>{
            resolved("result is here")
        }, 2000);
    })
}

complexLogic().then((data)=>{
    console.log(data);
    test2()
})
function test2(){
    console.log("test2");
}

