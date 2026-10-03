//ANY TYPE
var value:any="Rohit";
value=10;
value=["Rohit"];
value=true;

console.log(value);

//UNKNOWN TYPE
var value1:unknown="Rohit";
value1=20;
value1=["My name is Rohit"];
value1=false;

if(typeof value1=="string"){
    console.log(value1.toUpperCase());
}

console.log(value1);

//FUNCTION TYPE
function fruits():string{
    return "Mango";
}

function simple():boolean{
    return true;
}

function complex():number | string{
    let data=10;
    let name="Rohit";
    let type='age';

    if(type=='age'){
        return data;
    }
    else{
        return name;
    }
}

function anything():any{
    return "ROHIT";
}

//NEVER TYPE
function loopfunction():never{
    while(true){
        console.log("loop");
    }
}

//FUNCTION PARAMETER TYPE
function totalPrice(item:number,price:number){
    console.log("total price is:"+price*item);
}

totalPrice(50, 100);
totalPrice(100, 100);

//OR

function totalPrice1(item:number,price:number,text?:string){
    if(text){
        console.log(text+price*item);
    }else{
        console.log(price*item);
    }
}

totalPrice1(50, 100, "Total amount is");
totalPrice1(100, 100);

function simple1(data:any){
    console.log(data);
}
simple1(true);