function timer(){
    let date1=new Date();
    let date2=new Date("2028-07-14T00:00:00");
    let date=date2-date1;
    let days=Math.floor(date/(1000*60*60*24));
    let hour=Math.floor(date/(1000*60*60)%24);
    let minit=Math.floor(date/(1000*60)%60);
    let second=Math.floor(date/(1000)%60);

let count=`
  Olympic Games LA28 countDown:
     ${days} days,
     ${hour} hour,
     ${minit} minit,
     ${second} second
`  ;


let even=document.querySelector(".root");
even.innerHTML=count;

}

setInterval(timer,1000);
