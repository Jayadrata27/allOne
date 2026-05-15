const button=document.querySelector('button');
button.addEventListener('click',()=>{
    const place=document.getElementById('location').value;

   const promise=fetch(`http://api.weatherapi.com/v1/current.json?key=333f53aa28284d30852184752261505&q=${place}&aqi=yes`)


   promise
   .then((response)=>response.json())
   .then((data)=>updateTemp(data))                                           //use function in promise


    function updateTemp(data){                                              //use function in promise
       const element=document.getElementById('weatherInfo');
    //    element.innerHTML=data.current.temp_c;
       element.innerHTML=`Today's temperature ${data.current.temp_c}`; 
    }

})