// console.log(global);
// console.log(globalThis);

// console.log(globalThis.Math.random());

// console.log(this==globalThis);

// console.log(this);


// let a=10;
// const b=20;
// var c=30;
// console.log(this.b);



//this function point to  the window
// function greet(){
//     console.log(this);
// }
// greet();



//this function point to the undefined
// "use strict"
// function greet(){
//     console.log(this);
// }
// greet()



//this function point to the object 
// let obj={
//     name:"Joy",
//     age:21,
//     greet:function(){
//        console.log(this);
//     }
// }
// obj.greet();



//this function point to the window as here present arrow function
// let obj={
//     name:"Joy",
//     age:21,
//     greet:()=>{
//         console.log(this)
//     }
// }
// obj.greet();



// this function point to  the Object
// let obj={
//     name:"Joy",
//     age:21,
//     greet:function(){
//        let ab=()=>{
//         console.log(this);
//        } 
//        ab();
//     }
// }
// obj.greet();




// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// let a=new Person("Ajay",21);
// console.log(a);



// this function point to the window
// let greet=()=>{
//     console.log(this);
// }
// greet();


// this function point to the window
// let meet=function(){
//     console.log(this);
// }
// meet();


