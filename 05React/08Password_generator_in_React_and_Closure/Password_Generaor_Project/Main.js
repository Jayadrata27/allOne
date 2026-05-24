import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){

    const [password,setPassword]=useState("");
    const [length,setlength]=useState(10);
    const [numberChanged,setnumberChanged]=useState(false);
    const [charChanged,setcharChanged]=useState(false);


    function generatepassword(){
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged){
            str+="0123456789";
        }
        if(charChanged){
            str+="+-)(*&^%$#@!~`}{";
        }

        let pass="";

        for(let i=0;i<length;i++){
             pass+=str[Math.floor(Math.random()*str.length)];
        }

        setPassword(pass);
    }

    useEffect(()=>{
        generatepassword();
    },[length,numberChanged,charChanged]);



    return(
        <>
          <h1>{password}</h1>
          
          <div className="second">
             <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
             <label>Length{length}</label>

             <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>                 
             <label>Number</label>

             <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
             <label>Character</label>
          </div>
        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<PasswordGenerator/>);