// Shallow Copy
// let obj1={
//     a:1,
//     b:2
// }
// let obj2=obj1;
// obj2.a=10;
// console.log(obj2,obj1);


// deep copy
// let obj1={
//     a:1,
//     b:2
// }
// let obj2=structuredClone(obj1);           //structuredClone
// obj2.a=20;
// console.log(obj2,obj1);




// Nested Object
// const user={
//     name:"Joy",
//     age:21,
//     balence:1000,
//     address:{
//         vill:"Sitalkuchi",
//         pincode:736158,
//         Dost:"Coochbehar"
//     }
// }
// console.log(user.name);
// console.log(user.address.vill);
// let user1=Object.assign({},user);
// user1.address.pincode=123456;
// console.log(user.address.pincode);




// Destructruing of an Object
// let obj={
//     name:"Joy",
//     age:21,
//     amount:1000
// }
// // // let {name,age}=obj;
// // // console.log(name,age);

// // let {name:username,age:userage}=obj;
// // console.log(username,userage);

// let {name,...obj1}=obj;      //Rest Operator
// console.log(obj1);




//Destructruing of an Array
// let arr=[2,3,5,10,4];

// // let [first,second]=arr;
// // console.log(first,second);

// let [first,second, ,third]=arr;
// console.log(first,second,third);

// let [first,second,...rest]=arr;      //rest operator
// console.log(rest);





// Nested Object Destructruing
// let obj={
//     name:"Joy",
//     age:21,
//     address:{
//         city:"Kolkata",
//         pincode:736158
//     }
// }
// let {name}=obj;
// console.log(name);

// let {address}=obj;
// console.log(address);

// let {address:{pincode}}=obj;
// console.log(pincode);





// let obj={
//     arr:[90,40,60,80],
//     address:{
//         vill:"Sitalkuchi",
//         pincode:736158,
//         State:"West Bengal"
//     }
// }

// let {arr:[first]}=obj;
// console.log(first);

// let {arr:arr2}=obj;
// console.log(arr2);




// let user={
//    name:"Joy",
//    age:21,
//    amount:1000,
//    greet:function(){
//       console.log("Hello Coder Army");
//    },
//    meet:function(){
//       return 20;
//    }
// }
// user.greet();
// console.log(user.meet());




// proto
// let user1={
//     name:"Joy",
//     age:21
// }
// let user2={
//     money:1000,
//     amount:500
// }
// user2.__proto__=user1;
// console.log(user2.money);
// console.log(user2.name);




// Create
// let user1={
//     name:"Joy",
//     age:21
// }
// let user2={
//     money:1000,
//     amount:500
// }
// console.log(user2.money);
// user2=Object.create(user1);
// console.log(user2.name);




// although       __proto__== Object.create




