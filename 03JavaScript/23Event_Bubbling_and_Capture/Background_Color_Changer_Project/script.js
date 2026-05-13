// const red=document.getElementById("red");
// const blue=document.getElementById("blue");
// const orange=document.getElementById("orange");
// const purple=document.getElementById("purple");
// const green=document.getElementById("green");


// red.addEventListener('click',()=>{
//    document.body.style.backgroundColor="red";
// })
// blue.addEventListener('click',()=>{
//     document.body.style.backgroundColor="blue";
// })
// orange.addEventListener('click',()=>{
//     document.body.style.backgroundColor="orange";
// })
// purple.addEventListener('click',()=>{
//     document.body.style.backgroundColor="purple";
// })
// green.addEventListener('click',()=>{
//     document.body.style.backgroundColor="green";
// })








let buttons=document.querySelectorAll("button");

buttons.forEach((button)=>{

    // console.log(button.id)

   button.addEventListener('click',()=>{
       document.body.style.backgroundColor=button.id;
   })
})


