const grandParent=document.getElementById("grandParent");
const parent=document.getElementById("parent");
const child=document.getElementById("child");


// Event bubbling and event capturing
// addEventListener(first_event , callback ,capture);
child.addEventListener("click",(event)=>{
    // console.log("Child Clicked");

    // event.stopPropagation();                    //stopPropagation child er madhei simabaddho thakbe, baire bubbling hbe na

    // console.log(event.target);              //target
},false)                                      //bydefault capture false hota hai

parent.addEventListener("click",(event)=>{
    // console.log("parent Clicked");
    
    // console.log(event.target);                 //target
    // console.log(event.currentTarget);          //currentTarget
},false)                                         //bydefault capture false hota hai

grandParent.addEventListener("click",(event)=>{
    // console.log("grandParent Clicked");

    console.log(event.target);                   //target
},false)                                        //bydefault capture false hota hai

//jakhon capture and bubbling aksathe create kora hoy takhon,, age capture gulo hoy tarpor bubbling gulo hoy,capture er khetre grandParent theke suru hoy
//bubbling er khetre child theke suru hoy