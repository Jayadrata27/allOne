import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Github(){

    const {name}=useParams();
    const [profile,setProfile]=useState(null);
    
    async function fetchuser() {
       const response=await fetch(`https://api.github.com/users/${name}`);
       const data=await response.json();
       setProfile(data);
    }

    useEffect(()=>{
        fetchuser();
    },[])

    return(
        <>
          <h1>My Github Profile</h1>
          {/* {Display the user data, jodi profile exist kore setake bojhanor janno ? symbol} */}
          <div>
            <img src={profile?.avatar_url}></img>
            <h2>{profile?.login}</h2>
          </div>
        </>
    )
}
export default Github;