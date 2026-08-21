import React from "react";
import ReactDOM from "react-dom/client"

// const element1=<h1>Hello Coder Army</h1>
// JSX: JS Expression (Output laake de: Result Produce) : string ,number ,array
// JSX: Statement (unko aap nahi likh sakte ) : object

function Greet(props) {                //use props : je argument take pathay setake catch kore props
    return <h2>Ram Ram bhaiya JI {props.name} {props.age}</h2>
}
const element2=<Greet name="Joy" age="21" />                //atar janno function er 1st word ta capital hote hbe
const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(element2);
