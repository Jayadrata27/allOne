"use strict";

const obj = {
    name: "Joy",
    age: 21,
    gender: "Male",
    aadhar: 12345
};
let obj2 = {
    name: "Joy",
    age: 21
};
let obj3 = {
    name: "Joy",
    age: 21,
    balence: 2000
};
let obj4 = {
    name: "JOy",
    age: 25,
    balence: 1500
};
const arr = [{ name: "Rohit", age: 20 }, { name: "Mohit", age: 25 }];
;
;
const arr1 = [{ name: "Joy", age: 21 }, { salary: 1500, id: "abc" }];
// Function in TS
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(mes, val) {
    console.log(mes, val);
}
meet("Ajay", 120);
// default parameter
function neet(msg = "Jit") {
    console.log(msg);
}
neet();
neet("Bittu");
// Optional Parameter
function GATE(person) {
    console.log(person || "Mohan");
}
GATE("Anuj");
GATE();
// arrow function
const sum = ((a, b) => {
    return a + b;
});
console.log(sum(5, 6));
// callback function
const squareroot = (val) => val * val;
console.log(squareroot(10));
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(12, (amount) => {
    console.log(amount);
});
// Rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(2, 3, 1, 4, 123, 1, 12, 10);
const obje = {
    name: "Rohit Negi",
    age: 29,
    salary: "Two lakh/month",
    id: 123
};
console.log(obje);
