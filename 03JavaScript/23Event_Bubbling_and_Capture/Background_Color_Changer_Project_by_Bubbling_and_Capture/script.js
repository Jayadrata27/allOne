let root=document.getElementById("root");

root.addEventListener("click",(event)=>{
    // console.log(event.target.id);                //id
    // console.log(event.target.tagName);          //tagName

    if(event.target.tagName=="BUTTON"){
        document.body.style.backgroundColor=event.target.id;
    }
    
})