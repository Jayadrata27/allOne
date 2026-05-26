import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Component/Header";
import Body from "./Component/Body";


function GithubProfile(){
    return(
        <>
           <Header/>
           <Body/>
        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<GithubProfile/>);