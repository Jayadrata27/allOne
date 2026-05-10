// for in loop    , in Object always use for in loop
// const obj={
//     name:"Joy",
//     age:21,
//     gender:"Male",
//     city:"Kolkata"
// }
// for(key in obj){
//     console.log(key,obj[key]);
// }


// use Object.create
// let obj={
//     name:"Joy",
//     age:21,
//     gender:"male",
//     city:"Kolkata"
// }
// let obj2=Object.create(obj);
// obj2.money=1000;
// obj2.id=10;
// console.log(obj2);
// console.log(Object.keys(obj2));
// for(key in obj2){
//     console.log(key);
// }



// getOwnPropertyDescriptor
// let obj={};
// obj.name="Joy";
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));




// defineProperty
// let obj={};
// obj.name="Joy";
// Object.defineProperty(obj,"name",{
//     writable:true,
//     enumerable:true,
//     configurable:true
// })
// console.log(obj);



// const obj={
//     name:"Joy",
//     age:21,
//     account_number:300010
// }
// Object.defineProperty(obj,"account_number",{
//     writable:false,
//     enumerable:true,
//     configurable:true
// })
// obj.account_number=100024;              //due to writable:false,the value shouldnot change
// console.log(obj.account_number);



// const customer={
//     name:"Joy",
//     age:21,
//     account_number:2110004,
//     balence:2000
// }
// Object.defineProperty(customer,"account_number",{
//     writable:false,
//     enumerable:true,
//     configurable:true
// })
// customer.account_number=1000210;
// console.log(customer);




// defineProperties
// let obj={
//     name:"Joy",
//     age:21,
//     gender:"male",
//     account_number:210014
// }
// Object.defineProperties(obj,{
//     name:{
//         value:"Joy",
//         writable:false,
//         enumerable:true,
//         configurable:false
//     },
//     account_number:{
//         value:"210014",
//         writable:false,
//         enumerable:true,
//         configurable:false
//     }
// })
// obj.name="Ajay";
// obj.account_number=1000000;
// console.log(obj);




// let obj={
//     name:"Joy",
//     age:21,
//     account_number:210102,
//     balence:1000
// }
// Object.defineProperty(obj,"name",{
//     enumerable:false
// })
// console.log(obj);




// let obj={
//     name:"Joy",
//     age:21,
//     account_number:100210,
//     balence:1000
// }
// let obj2=Object.create(obj);
// obj2.city="Kolkata";
// obj2.place="West Bengal";
// Object.defineProperty(obj,"name",{
//     enumerable:false
// })
// for(key in obj2){
//    console.log(key);
// }










