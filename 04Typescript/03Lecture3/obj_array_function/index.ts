// interface
interface Person{
   name:string,
   age:number,
   gender:string,
   aadhar?:number         //optional
}
const obj:Person={
    name:"Joy",
    age:21,
    gender:"Male",
    aadhar:12345
}





// <!-- Utility Types for Objects -->
// 1: Partial<Person>  sb property guloke nao cover korte pare
// 2: Required<Person>  sb property gulokei cover korte hbe
// 3: Readonly<Person> sb property gulo sudhu read kora jabe,change kor ajabe na
interface customer{
    name:string,
    age:number,
    balence:number
}
let obj2:Partial<customer>={
    name:"Joy",
    age:21
}
let obj3:Required<customer>={
    name:"Joy",
    age:21,
    balence:2000
}
let obj4:Readonly<customer>={
    name:"JOy",
    age:25,
    balence:1500
}





// Array of Objects
interface people{name:string,age:number}
const arr:people[]=[{name:"Rohit",age:20},{name:"Mohit",age:25}];


interface prople{name:string,age:number};
interface manager{salary:number,id:string};
const arr1:(people | manager)[]=[{name:"Joy",age:21},{salary:1500,id:"abc"}];




// Function in TS
function greet(a:number):number{
    console.log(a)
    return a+5;
}
console.log(greet(10));

function meet(mes:string,val:number):void{
    console.log(mes,val);
}
meet("Ajay",120);


// default parameter
function neet(msg:string="Jit"){
   console.log(msg);
}
neet();
neet("Bittu");


// Optional Parameter
function GATE(person?:string){
    console.log(person || "Mohan");
}
GATE("Anuj");
GATE();


// arrow function
const sum=((a:number,b:number):number=>{
    return a+b;
})
console.log(sum(5,6));



// callback function
const squareroot=(val:number)=>val*val;
console.log(squareroot(10));



// callback function in details
type chill=(amount:number)=>void;

function placeOrder(order:number,callback:chill):void{
    const amount:number=order+10;
    callback(amount);
}
placeOrder(12,(amount)=>{
    console.log(amount);
})



// Rest parameter
function total(...arr:number[]){
     let ans:number=0;
     arr.forEach((val:number)=>ans=ans+val);
     console.log(ans);
}
total(2,3,1,4,123,1,12,10);




//Extend Keyword
 interface human{
    name:string,
    age:number
 }
 interface Teacher extends human{
    salary:string,
    id:number
 }
 interface BankEmployee extends human{
    salary:string,
    position:string
 }
const obje:Teacher={
    name:"Rohit Negi",
    age:29,
    salary:"Two lakh/month",
    id:123
}
console.log(obje);

