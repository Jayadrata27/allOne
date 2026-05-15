// callback hell

// callback function
// function fetchuser(callback){
//      console.log("Fetching the user Detail....");

//     setTimeout(()=>{
//      console.log("Data fetched successfully");

//     // data fetched from backend
//     const name="Rohit";
//     callback(name);
     
//     },2000)
// }

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//    console.log(`Hello ${name} ,I will met you in Delhi`);
// }

// function edit(name){
//    console.log(`Edit ${name},of the user`);
// }

// fetchuser(greet);
// fetchuser(meet);
// fetchuser(edit);










function greet(obj){
   console.log(`Hello ${obj.name}`);
}
function meet(obj){
   console.log(`Hello ${obj.name},I will meet you in Delhi`);
}
function edit(obj){
   console.log(`Edit ${obj.name} ,of the user`);
}

function fetchdata(callback){
   console.log("Fetched info of user");

   setTimeout(()=>{
        console.log("User datail fetched succesfully");
        const obj={
            name:"Rohit",
            age:21,
            city:"Kolkata",
        }
        callback(obj);
   },2000)

}
// fetchdata(greet);
// fetchdata(meet);
fetchdata(edit);