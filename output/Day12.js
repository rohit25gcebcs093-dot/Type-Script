"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
let CollegeData3 = {
    name: 'IIT Delhi',
    location: 'Delhi',
    students: 600,
};
function getCollegeData(data) {
    return data;
}
getCollegeData({ name: 'IIT Bombay', location: 'Bombay' });
function getCollegeData2(data) {
    return data;
}
getCollegeData2({ name: 'IIT Bombay', location: 'Bombay', students: 30, branch: 3 });
var CollegeData7 = {
    name: 'IIT Delhi',
    location: 'Delhi',
    // students:1000
};
var APICall = 'success';
APICall = "loading";
var APICall2;
APICall2 = 'error';
var RandomData = 20;
var SiteRoleOption = 'Admin';
var RoleName = {
    Admin: 'Rohit',
    user: 'Maddheshiya',
    guest: 'peter',
};
//# sourceMappingURL=Day12.js.map