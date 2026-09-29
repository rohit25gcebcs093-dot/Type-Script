//BIGINT
var bignumber:bigint=2348976329856298476n;
var x=1n;
var y=2n;

console.log(bignumber+x);
console.log(bignumber+y);

//SYMBOL
var sym = Symbol();
var sym2 = Symbol();

var sym3 = Symbol('abc');
var sym4 = Symbol('abc');

// console.log(sym == sym2); -->>It gives false 

console.log(sym3);
console.log(sym4);

console.log(sym3 == sym4);

const id = Symbol('id');
const obj={
    id:100,
    name:"Rohit Maddheshiya"
}

console.log(obj.id);

function getInfo(){
    const nameInput=document.getElementById('username')as HTMLInputElement

    const name:string=nameInput.value

    const emailInput=document.getElementById('email')as HTMLInputElement

    const email:string=emailInput.value

    const ageInput=document.getElementById('age')as HTMLInputElement

    const age:string=ageInput.value

    console.log(name,email,age);

}