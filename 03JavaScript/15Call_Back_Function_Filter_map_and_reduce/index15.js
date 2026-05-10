// for off loop
// let arr=[10,20,11,18,13];
// for(value of arr){
//     console.log(value);
// }


// let str="Rohit is good boy";
// for(value of str){
//     console.log(value);
// }



//function
// function names(){
//     console.log("Hello I am name");
// }
// function greet(){
//     console.log("I am a callback function");
// }
// names();
// greet();



// callback function
// function names(fun){
//     console.log("Hello I am name");
//     fun();
// }
// function greet(){
//     console.log("I am a callback function");
// }
// names(greet);


// function names(fun){
//     console.log("Hello I am name");
//     fun();
//  }
// names(function greet(){
//     console.log("I am a callback function");
// });


// function names(fun){
//     console.log("Hello I am name");
//     fun();
//  }
// let greet=function(){
//     console.log("I am a callback function");
// };
// names(greet);




// setInterval
// function fetchData(){
//     console.log("I am fatching Data");
// }
// setInterval(fetchData,5000);




// forEach
// let arr=[10,20,30,40,50];
// arr.forEach((num)=>{
//    console.log(num);
// })


// let arr=[10,20,30,40,50];
// arr.forEach((num,index)=>{
//    console.log(index,num);
// })


// let arr=[10,20,30,40,50];
// arr.forEach((num,index,arr)=>{
//     arr[index]=num*2;
// })
// console.log(arr);



// filter
// let arr=[10,20,30,40,50,22,33,41];
// let result=arr.filter((num)=>num%2==0);
// console.log(result);


// let students=[
//     {name:"Joy",age:21,marks:98},
//     {name:"Ajay",age:19,marks:90},
//     {name:"Bijoy",age:23,marks:80},
//     {name:"Sujoy",age:24,marks:85},
//     {name:"kaku",age:25,marks:88}, 
// ]
// let result=students.filter((obj)=>obj.marks>=90);
// console.log(result);



// map:it's can modify the value
// let arr=[1,2,3,4];
// let result=arr.map((num)=>num*num);
// console.log(result);


// let arr=[1,2,3,4];
// let result=arr.map((index,num)=>num*index);
// console.log(result);



// first filter the use map
// let arr=[1,2,3,4,5,6];
// let result=arr.filter((num)=>num%2==0).map((num)=>num*num);
// console.log(result);






