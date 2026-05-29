import { useEffect, useState } from "react";
import { useEffectEvent } from "react";
import useFetch from "./useFetch";

function Body(){


    const {Profile , setProfile , numberofProfile , setnumberofProfile , generateProfile}=useFetch();

                                                                      //multiple line return korte hobe
                                                                    //JSX er madhye JS likhte hole curlybasis { } lagate hoy   
    return(
      <>  
        <div className="but">
            <input type="text" className="inpu" placeholder="Search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profiles</button>
        </div>
        <div  className="profiles">
            {
                Profile.map((value)=>{
                  return (<div key={value.id} className="cards">           
                             <img src={value.avatar_url}></img>
                             <h2>{value.login}</h2>
                             <a href={value.html_url} target="blank">Profile</a>
                          </div>)
                })
            }
        </div>
      </>  
    )
}
export default Body;