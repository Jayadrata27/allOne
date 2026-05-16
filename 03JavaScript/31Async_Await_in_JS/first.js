const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise resolved");
    },8000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second Promise resolved");
    },5000)
})


// p1.then((value)=>console.log(value));
// p2.then((value)=>console.log(value));


async function greet() {              //async function sabsamay promise return kore
    const data1=await p1;
    console.log(data1);

    const data2=await p2;
    console.log(data2);
}
greet();