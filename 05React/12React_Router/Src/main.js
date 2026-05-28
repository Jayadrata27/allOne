import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route ,Link} from "react-router";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Dashboard from "./Component/Dashboard";
import Details from "./Component/Details";
import Zero from "./Component/Zero";
import Hello from "./Component/Hello";
import Hi from "./Component/Hi"


function App(){
    return(
        <>
            <BrowserRouter>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dashboard">DashBoard</Link>
                    <Link to="/details" >Details</Link>
                </nav>


                 <Routes>
                    <Route path="/" element={<Home/>} ></Route>
                    <Route path="/contact" element={<Contact/>} ></Route>
                    <Route path="/dashboard" element={<Dashboard/>} ></Route>
                    <Route path="/details" element={<Details/>} >
                         <Route index element={<Zero/>}></Route>
                         <Route path="hello" element={<Hello/>}></Route>
                         <Route path="hi" element={<Hi/>}></Route>
                    </Route>
                 </Routes>
            </BrowserRouter>
        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);