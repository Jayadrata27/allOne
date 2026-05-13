// let form=document.querySelector("form");

// input
// form.addEventListener("input",(event)=>{
//     console.log(event.target.value);
// })


//change
// form.addEventListener('change',(event)=>{
//     console.log(event.target.value);
// })


// focusin
// form.addEventListener('click',(event)=>{
//     console.log(event.target.value);
// })


// focusout
// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })


// submit
// form.addEventListener('submit',(event)=>{
//     console.log("Submit form");
// })

// reset
// form.addEventListener('reset',(event)=>{
//     console.log("Form Reset")                      //etar janno html er form er butto type : reset korte hbe
// })


// FormData 
const form=document.querySelector("form");
form.addEventListener('submit',(event)=>{

    event.preventDefault();                 //for not refreshing the page

    const data=new FormData(form);
    // for(value of data){                    //Iterator theke data access korar janno for-of  loop use korte hoy
    //     console.log(value);
    // } 
    
    console.log(Array.from(data.entries()));      //Iterator theke data access korar Array.from  use kora jay

})











// const form=document.querySelector("form");
// form.addEventListener('submit',(event)=>{           // form er janno always submit event use korte hoy

//      event.preventDefault();             //for not refreshing the page
    
//      const first=document.getElementById("first");
//      console.log(first.value);

//      const second=document.getElementById("second");
//      console.log(second.value);

//      const third=document.getElementById("third");
//      console.log(third.value);

//      const result=document.getElementById("result");
//      result.innerHTML=`${first.value} ${second.value} is a good boy, his age is ${third.value}`;
// })