import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Increment from "./Component/Increment";
import Decrement from "./Component/Decrement";

function App(){

    const [count,setCount]=useState(0);

   return(
      <>

         <h1>Hello Coder Army</h1>
         <Increment counts={count} setCounts={setCount} />
         <Decrement counts={count} setCounts={setCount} />

      </>
   )
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);
