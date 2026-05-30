import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"
import stores from "./Component/stores";
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";


function App(){
    return(
        <>
          <Provider store={stores}>
             <CoinCreate/>
          </Provider>
        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>)



// function Fetchuser(){
//    useEffect(async ()=>{
//         dispatch(LoadingData(true));

//         try{
//             const response=await fetch("Github user Info");
//             const da=await response.json();
//             dispatch(updateData(da));
//         }
//         catch(error){
//             dispatch(ErrorData("Error Occured"));
//         }
//    })
// }