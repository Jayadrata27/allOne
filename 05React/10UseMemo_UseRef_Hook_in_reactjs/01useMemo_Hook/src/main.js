import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client"

// useMemo hook
// 1:counter button :increase
// 2: Input field: Fibonnaci number



function App(){

    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(null);

    
    const Fibonnaci=useCallback((n)=>{
       if(n<=1){
            return n;
        }
        return Fibonnaci(n-1)+Fibonnaci(n-2);
    },[])


    const result=useMemo(()=>{
         return Fibonnaci(number);
    },[number])


    return(
        <>
           <h1>Counter is {count}</h1>
           <button onClick={()=>setCount(count+1)}>Increment</button>
           <button onClick={()=>setCount(count-1)}>Decrement</button>

           <div>
              <h2>Fibonnaci Number is: {result}</h2>
              <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
           </div>
        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);