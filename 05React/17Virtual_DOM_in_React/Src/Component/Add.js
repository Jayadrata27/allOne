import { useState } from "react";

function Add(){

    const [count,setCount]=useState(0);

    return(
        <>
          <h1>Count is: {count}</h1>
          <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default Add;