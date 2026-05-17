//Typescript Transpiler hota hai
let num:number=10;

let x=10;

let val="Joy";




let money:any;      
money="Rohit";
money=20;
// console.log(money.toUpperCase());   //any konorakom kono type check kore na



// unknown is better than any
//unknown prothome typeof check kore tarpor convert kore 
let val2:unknown;   
val2=20;
val2="Joy";
if(typeof val2==="string"){
    console.log(val2.toUpperCase());
}
if(typeof val2==="number"){
    console.log(val2.toFixed(2));
}




// Non Primitive Data type
// Array
let arr:number[]=[2,4,5,7,11];  //only can push number
let arr2=[2,1,19,10];      //only can push number

let arr3:(string | number)[]=["Joy",10,20,"Rohit"];   //only can push number and String
arr3.push("Ajay");
arr3.push(25);

let arr4:(string | number | boolean)[]=["Joy",15,true];  //only can push string number and boolean




// Tuples
let Tuple:[string,number,number,boolean]=["Joy",10,20,true];





// Objects: inline
let obj1:{name:string,age:number,gender:string}={
    name:"Joy",
    age:21,
    gender:"Male"
}

// Object
let obj:{name:string,age:number,balence:number};
obj={
    name:"Joy",
    age:21,
    balence:1000
}

// type alises
type customer={
    name:string,
    age:number,
    id:string
}
let customer1:customer={
    name:"Rohit",
    age:21,
    id:"abc"
}


//we can use interface multiple time
// interface
interface admin{
   name:string,
   age:number,
   position:string
}
interface admin{
    id:number
}
let obj3:admin={
    name:"Joy",
    age:21,
    position:"HR",
    id:123
}
