
import ReactDOM from "react-dom/client"
import Second from "./Component/Second";
import GlobalContext from "./Component/Global";
import { useContext, useState } from "react";

function App(){

    const [count,setCount]=useState(0);

    return(
        <>

          <GlobalContext.Provider value={{count,setCount}}>
              <h1>Hello Coder Army {count} </h1>
              <Second/>
          </GlobalContext.Provider>

        </>
    )
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);