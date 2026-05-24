import React, { useState } from "react";
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
 
    let [Ar,setAr]=useState(arr);

    function sortArray(){
        Ar.sort((a,b)=>a.price-b.price);
        setAr([...Ar]);
    }
    function priceAbove1500(){
       const B=arr.filter((value)=>value.price>1500);
       setAr(B);
    }


    return(
        <>
        <Header/>

        <button onClick={sortArray}>Sort by Price</button>
        <button onClick={priceAbove1500}>Price above 1500</button>

        <div className="middle" style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
            {
                Ar.map((value,index)=> <Card key={index} imageURL={value.image} cloth={value.cloth} offer={value.offer} price={value.price} />)
            }
        </div>
        <Footer/>
        </>   
    )
}
const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);