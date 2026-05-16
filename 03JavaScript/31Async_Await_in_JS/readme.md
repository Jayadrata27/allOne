<!-- Async await --> 
Async always return a promise
await will always be used inside async


<!-- Promise all -->

stacK:
|. |
|. |                            Micrptask queue : await statement present here
|.  |                           callback queue : setTimeout , setInterval present here
|. |             
|__|


<!-- How to remeber Promise -->

const data = fetch("Yahan se data laake dedo");

data.then(response=>console.log(response));