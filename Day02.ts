//Numbers
//var var_name: data_type=value
var num1:number=10;
var num2:number=20;

var total=num1+num2;
console.log(total);

var oct:number=0o100001;
var binary:number=0b00001;
var hexa:number=0x00001;

console.log(oct+10);

var item:number=100;
var item2="50";
//var item2Converted=Number(item2)
var item2Converted=+item2

console.log(item+item2Converted);
console.log(item+ item2);
console.log(item+ +item2);

//Strings
var str:string="Hello How are you?";
var str2:string='Hello How are you?';
var str3:string=`Hello how are you?`;

console.log(str);
console.log(str2);
console.log(str3);

var age:number=20;
var userName:string="Rohit Maddheshiya";
var info:string=`My name is ${userName} and age is ${age} years`;
console.log(info);

//Converting number into string
var num:number=30;
// var data:string=num.toString();
var data:string=" "+num;

var boolData=true;
// var data:string=boolData.toString();
var data:string=" "+boolData;

console.log(data);

// var item:boolean=true;
// var other:boolean;
// other=item;
// console.log(item);

