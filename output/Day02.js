"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Numbers
//var var_name: data_type=value
var num1 = 10;
var num2 = 20;
var total = num1 + num2;
console.log(total);
var oct = 0o100001;
var binary = 0b00001;
var hexa = 0x00001;
console.log(oct + 10);
var item = 100;
var item2 = "50";
//var item2Converted=Number(item2)
var item2Converted = +item2;
console.log(item + item2Converted);
console.log(item + item2);
console.log(item + +item2);
//Strings
var str = "Hello How are you?";
var str2 = 'Hello How are you?';
var str3 = `Hello how are you?`;
console.log(str);
console.log(str2);
console.log(str3);
var age = 20;
var userName = "Rohit Maddheshiya";
var info = `My name is ${userName} and age is ${age} years`;
console.log(info);
//Converting number into string
var num = 30;
// var data:string=num.toString();
var data = " " + num;
var boolData = true;
// var data:string=boolData.toString();
var data = " " + boolData;
console.log(data);
// var item:boolean=true;
// var other:boolean;
// other=item;
// console.log(item);
//# sourceMappingURL=Day02.js.map