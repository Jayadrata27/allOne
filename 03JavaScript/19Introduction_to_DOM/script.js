
function timer(){
    let ind=new Date().toLocaleTimeString();
    let element=document.querySelector(".root");
    element.innerHTML=ind;
}
 
setInterval(timer,1000);