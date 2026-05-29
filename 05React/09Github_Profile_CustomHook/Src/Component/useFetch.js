import { useState ,useEffect } from "react";

function useFetch(){

    const [Profile,setProfile]=useState([]);          //empty array
    const [numberofProfile,setnumberofProfile]=useState("");

    async function generateProfile(count){

        const ran=Math.floor(Math.random()*1000+1);

        const response=await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data=await response.json();

        setProfile(data);
    }

    useEffect(()=>{
        generateProfile(20);
    },[])


    return(
       {Profile , setProfile , numberofProfile , setnumberofProfile , generateProfile}
    )
}
export default useFetch;