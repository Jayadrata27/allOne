// JS is a single threaded synchronous language:
// JS behaviour : Async

// console.log(10);

// setTimeout(()=>{
//     console.log(20);
// },2000)

// console.log(30);







console.log(10);
const timer=Date.now();    //old timer
while(Date.now()-timer<2000){
    // wait for 2 second
}
console.log(20);

console.log(30)


