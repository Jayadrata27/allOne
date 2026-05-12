const button=document.getElementById("btn");

button.addEventListener("click",(event)=>{
    
    //Read the data
     const input1=document.getElementById("first");
     const number1=Number(input1.value);                         //jehetu input er value gulo string a ase tai Number a convert korte hbe

     const input2=document.getElementById("second");
     const numner2=Number(input2.value);                        //jehetu input er value gulo string a ase tai Number a convert korte hbe

    // Output the result
    let result=document.getElementById("result");
    let number=number1+numner2;
    result.innerHTML="Result: "+number;
})