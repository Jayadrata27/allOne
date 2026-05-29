import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Component/Header";
import Card from "./Component/Card";
import { Provider } from "react-redux";
import stored from "./Component/stored";


function App(){
    return(
        <>
           <Provider store={stored}>
               <Header/>
               <Card/>
           </Provider>
        </>
    )
}


const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>)