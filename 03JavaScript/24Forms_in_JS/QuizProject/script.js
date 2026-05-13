
// const original_answer=[
//     "Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"       //this is an array
// ]


const original_answer={           //airakom compare er samay amader Object er through key-value pare korte hbe ,array use kora jabe na
    q1: "Sachin Tendulkar",
    q2:"West Indies",
    q3:"Sachin Tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan"
}



const form=document.querySelector("form");
form.addEventListener('submit',(event)=>{
  
    event.preventDefault();              //for not refresing the page

    const data=new FormData(form);

    // const answer=Array.from(data.values());      //Iterator to value access
    // let result=0;
    // for(let i=0;i<answer.length;i++){
    //     if(answer[i]==original_answer[i]){
    //         result++;
    //     }
    // }


    let result=0;
    for([key,value] of data.entries()){            //Iterator to key and value access
         if(original_answer[key]==value){
             result++;
         }
    }
    
    const out=document.getElementById('out');
    out.innerHTML=`${result} out of 5 is correct`;
})