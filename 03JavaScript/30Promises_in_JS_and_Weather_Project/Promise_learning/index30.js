// async task
//weather 
//promise : pending resolve reject

// const Promises=fetch(`http://api.weatherapi.com/v1/current.json?key=333f53aa28284d30852184752261505&q=London&aqi=yes`);

// Promises.then((response)=>{
//     // console.log(response);
//     // const pro2=response.json();

//     // pro2.then((data)=>{
//     //     console.log(data);
//     // })

// })





// const pro2=Promises.then((response)=>{
//     return response.json();
// })
// pro2.then((data)=>{
//     console.log(data);
// })





// Promises.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })




// Promises.then((response)=>response.json()).then((data)=>console.log(data));




// Promises
// .then((response)=>response.json())
// .then((data)=>console.log(data));






fetch(`http://api.weatherapi.com/v1/current.json?key=333f53aa28284d30852184752261505&q=London&aqi=yes`)
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));