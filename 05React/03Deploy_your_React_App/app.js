import React from "react"
import ReactDOM from "react-dom/client"


// const newElement=<h1>Hello Coder Army</h1>                            //babel can convert JSX to React
// JSX: JS ke expression

const names="Joy";
const obj={
    age:21,
    salary:66000
}
const obj2={
    backgroundColor:"black",
    color:"pink",
    fontSize:"30px"
}
const newElement=(
    <>
        <h1 id="first" className="second">Hello Coder Army {names}</h1>
        <h2 money={23} style={obj2}>Maja aaya mujhe {obj.age}</h2>    
        <h3 style={{backgroundColor:"black",color:"white"}}>Hello HIfi</h3>                      
    </>
)
                                                                                //money is a attribute which store 23 as a number
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(newElement);
 
// JSX: Javascript XML: HTML code direct js ke andear likh sakte hai



// React Component
// Function Based Component
function greet(){
    return <h1>Aur bhai kaise hai</h1>
}
const meet=()=>{
    return <h2>Mera sab achaa hai</h2>
}
const newElement2=greet();
const newElement3=meet();
// Reactroot.render(newElement2);
// Reactroot.render(meet());
// Reactroot.render(<>{greet()},{meet()}</>)
// const newElement4=<>{greet()}{meet()}</>
// Reactroot.render(newElement4);
const newElement5=<>{newElement2}{newElement3}</>
Reactroot.render(newElement5);