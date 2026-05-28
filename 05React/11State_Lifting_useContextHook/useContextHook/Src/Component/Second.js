import Third from "./Third";
import GlobalContext from "./Global";
import { useContext } from "react";

function Second(){     
    
    // const data=useContext(GlobalContext);
    const {count,setCount}=useContext(GlobalContext);         //consume context

    return(
       <>
          <h2>Kaise hai aap sab log {count} </h2>
          <Third/>
       </>
    )
}

export default Second;