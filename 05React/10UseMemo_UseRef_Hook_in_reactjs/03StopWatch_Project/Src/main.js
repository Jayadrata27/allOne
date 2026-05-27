import React, { useState,useRef } from "react";
import ReactDOM from "react-dom/client"


function StopWatch(){

    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const intervalRef=useRef(null);


    function start(){
        if(!isRunning){

           intervalRef.current=setInterval(()=>{
              setTime((prevTime)=>{
                 return prevTime+1;
               })
            },1000)

            setIsRunning(true);
        }
              
    }

    function stop(){

        if(isRunning){
            
            clearInterval(intervalRef.current);
            intervalRef.current=null;

            setIsRunning(false);
        }
       
    }

    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setTime(0); 
    }

    return(
        <>
           <h1>StopWatch is: {time}</h1>
           <button onClick={()=>start()}>Start</button>
           <button onClick={()=>stop()}>Stop</button>
           <button onClick={()=>reset()}>Reset</button>
        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<StopWatch/>);