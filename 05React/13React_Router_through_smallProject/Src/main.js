import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route } from "react-router";
import Github from "./Component/Github";

function App()
{
    return(
        <>
           <BrowserRouter>
               <Routes>
                  <Route path="/github/:name" element={<Github/>} ></Route>
               </Routes>
           </BrowserRouter>
        </>
    )
}
const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>)