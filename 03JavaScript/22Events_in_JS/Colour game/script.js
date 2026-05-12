document.body.addEventListener('click',(event)=>{

     const circle=document.createElement("div");
     circle.className="circle";

     circle.textContent="HI";

     const x=event.clientX;
     const y=event.clientY;

     circle.style.left=`${x}px`;
     circle.style.top=`${y}px`;

     let color=["red","blue","orange","green","purple","white","yellow","wheat"];
     circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];

    document.body.appendChild(circle)

    setTimeout(()=>{
        circle.remove();
    },5000)
})