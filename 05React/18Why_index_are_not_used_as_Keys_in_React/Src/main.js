import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Add from "./Component/Add";

function App(){
 
    const [language,setLanguage]=useState(["TS","JS","Java"]);

    function handleClick(){
        setLanguage(["C++",...language]);
    }

    return(
       <>
           <div style={{display:"flex", justifyContent:"center" , gap:"20px", marginTop:"50px"}}>
           {
              language.map((value,index)=> <Add key={value} value={value}></Add>)             //key unique rakhte hbe
           }
           </div>

           <button onClick={handleClick}>AddLanguage</button>
       </>
    )
}



ReactDOM.createRoot(document.getElementById("root")).render(<App/>)