"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greet() {
        console.log(`Hi ${this.name}`);
    }
}
const obj1 = new Person("Rohit", 28);
const obj2 = new Person("Nithun", 26);
console.log(obj1);
console.log(obj2);
console.log(obj1.name);
obj1.greet();
// public private protected 
// public can use in any where ,private and protected can use in class only
class Customer {
    name;
    age;
    balence;
    constructor(name, age, balence) {
        this.name = name;
        this.age = age;
        this.balence = balence;
    }
    meet() {
        this.age = this.age + 10;
        return this.age;
    }
}
const p1 = new Customer("Joy", 21, 1000);
console.log(p1.name);
// console.log(p1.age);
console.log(p1.meet());
// console.log(p1.balence);
class Employee extends Customer {
    salary;
    constructor(salary, name, age, balence) {
        super(name, age, balence);
        this.salary = salary;
    }
    greet() {
        console.log(this.name);
        // console.log(this.age);  //it cannot do here as age is private in parent class
        console.log(this.balence); //as balence is protected in parent class it can be accessable in child class
    }
    meet() {
        console.log("Hello Coder Army");
        return 10;
    }
}
const emp1 = new Employee(420, "Rohit", 28, 2000);
console.log(emp1);
console.log(emp1.greet());
console.log(emp1.meet()); //eta kacher meet function take call koreche
// Generic: Template
// function value(a:number | string | number[] | boolean):(number | string | number[] | boolean){
//     return a;
// }
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("Rohit"));
console.log([10, 20, 30, 13, 12]);
console.log(value(true));
//# sourceMappingURL=clas.js.map