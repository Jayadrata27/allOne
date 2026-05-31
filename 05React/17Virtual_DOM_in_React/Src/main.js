import React from "react";
import ReactDOM from "react-dom/client"
import Add from "./Component/Add";

const arr=[0,1,2,3];       //key

function App(){
    return(
        <>
           {
            arr.map((value)=><Add key={value} ></Add>)
           }
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)