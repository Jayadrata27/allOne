// let age=21;
// if(age>=18){
//     console.log("You are Eligable for Vote");
// }
// else{
//     console.log("You are not eligable for vote");
// }





// switch(new Date().getDay()){
//     case 0:{
//         console.log("Sunday");
//         break;
//     }
//     case 1:{
//         console.log("Monday");
//         break;
//     }
//     case 2:{
//         console.log("Tuesday");
//         break;
//     }
//     case 3:{
//         console.log("Wednesday");
//         break;
//     }
//     case 4:{
//         console.log("Thursday");
//         break;
//     }
//     case 5:{
//         console.log("Friday");
//         break;
//     }
//     case 6:{
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("NOt a valid day");
//     }
// }






// loop
// for(let i=0;i<20;i++){
//     console.log("Hello World");
// }


// let sum=0;
// for(let i=1;i<=10;i++){
//     sum=sum+i;
// }
// console.log(sum);


// Global Scope
// let a=10;
// var b=20;
// const c=30;
// function greet(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// greet();


// local scope
// function greet(){
//     let a=10;
//     var b=20;
//     const c=30;

//     console.log(a,b,c);
// }
// greet();



// local priority bigger than global priority
// let amount=20;
// if(true){
//     let amount=10;
//     console.log(amount);
// }



// block scope
// if(true){
//     let a=10;
//     var b=20;
//     const c=30;
// }
// console.log(b);
// console.log(a);
// console.log(c);




// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }



// let arr=[10,20,30,40,50];
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }


// const obj={
//     name:"Joy",
//     age:21,
//     amount:100,
//     city:"Kolkata"
// }
// let key=Object.keys(obj);
// for(let i=0;i<=key.length;i++){
//     console.log(obj[key[i]]);
// }


