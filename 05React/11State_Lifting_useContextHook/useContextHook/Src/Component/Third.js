import GlobalContext from "./Global";
import { useContext } from "react";


function Third(){               

    // const data=useContext(GlobalContext);
    const {count,setCount}=useContext(GlobalContext);               //consume context

    return(
        <>
           <h3>I am printing {count}</h3>
           <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
export default Third;