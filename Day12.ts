//Utitlity types are built-in types that help 
//transform or manipulate other types in a convenient WebAssembly.
//Some utitlity types are-->
//Partial
//Required
//Readonly
//Pick
//Omit
//Exclude
//Nonnullable
//Extract
//Record

interface CollegeType{
    name:string,
    location:string,
    students:number,
    branch:number|undefined,
}

let CollegeData3:Partial<CollegeType>={
    name:'IIT Delhi',
    location:'Delhi',
    students:600,
}

function getCollegeData(data:Partial<CollegeType>){
    return data
}

getCollegeData({name:'IIT Bombay',location:'Bombay'})

function getCollegeData2(data:CollegeType){
    return data
}

getCollegeData2({name:'IIT Bombay',location:'Bombay',students:30,branch:3})

var CollegeData7:Omit<CollegeType,'students'|'branch'>={
    name:'IIT Delhi',
    location:'Delhi',
    // students:1000
}

type APIStatus="loading" | 'error' | 'pending' | 'success';
var APICall:Exclude<APIStatus,'pending'>='success';
APICall="loading";
var APICall2:Extract<APIStatus,'error'| 'success'>;
APICall2='error';

type RandomType=string | number | undefined | null | string[];

var RandomData:NonNullable<RandomType>=20;

type SiteRole= 'Admin' | 'user' | 'guest'
var SiteRoleOption:SiteRole='Admin'
var RoleName:Record<SiteRole,string>={
    Admin:'Rohit',
    user:'Maddheshiya',
    guest:'peter',
} 

