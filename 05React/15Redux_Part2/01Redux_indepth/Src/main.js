import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import stores from "./Component/Stores";
import Counting from "./Component/Counting";
import CustomCounter from "./Component/CustomCounter";

function App(){
    return(
        <>
           <Provider store={stores}>
               <Counting/>
               <br></br>
               <br></br>
               <CustomCounter/>
           </Provider>
        </>
    )
}


const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>)