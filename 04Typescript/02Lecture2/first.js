"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Typescript Transpiler hota hai
let num = 10;
let x = 10;
let val = "Joy";
let money;
money = "Rohit";
money = 20;
// console.log(money.toUpperCase());   //any konorakom kono type check kore na
// unknown is better than any
//unknown prothome typeof check kore tarpor convert kore 
let val2;
val2 = 20;
val2 = "Joy";
if (typeof val2 === "string") {
    console.log(val2.toUpperCase());
}
if (typeof val2 === "number") {
    console.log(val2.toFixed(2));
}
// Non Primitive Data type
// Array
let arr = [2, 4, 5, 7, 11]; //only can push number
let arr2 = [2, 1, 19, 10]; //only can push number
let arr3 = ["Joy", 10, 20, "Rohit"]; //only can push number and String
arr3.push("Ajay");
arr3.push(25);
let arr4 = ["Joy", 15, true]; //only can push string number and boolean
// Tuples
let Tuple = ["Joy", 10, 20, true];
// Objects: inline
let obj1 = {
    name: "Joy",
    age: 21,
    gender: "Male"
};
// Object
let obj;
obj = {
    name: "Joy",
    age: 21,
    balence: 1000
};
let customer1 = {
    name: "Rohit",
    age: 21,
    id: "abc"
};
let obj3 = {
    name: "Joy",
    age: 21,
    position: "HR",
    id: 123
};
//# sourceMappingURL=first.js.map