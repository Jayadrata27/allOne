import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./Component/Card";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import arr from "./utlities/dummy";
import { greet, meet } from "./utlities/dummy";    //jakhon akta file theke dubar import korte hoy takhon avabe hoy
//Header
// Body
// Footer


function App(){
    return(
        <>
        <Header/>
        <div className="middle" style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
            {
                arr.map((value,index)=> <Card key={index} imageURL={value.image} cloth={value.cloth} offer={value.offer}/>)
            }
        </div>
        <Footer/>
        </>   
    )
}
const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);