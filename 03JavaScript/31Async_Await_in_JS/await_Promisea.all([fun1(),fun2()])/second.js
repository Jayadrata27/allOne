// duto function aksathe chalate gele async function er vetore await Promise.all() korte hbe

function test1(){
    const p1=new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve("First promise resolved");
         },5000)
    })
    return p1;
}
function test2(){
    const p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second promise resolved");
        },5000)
    })
    return p2;
}

async function greet() {


     const [data1,data2]=await Promise.all([test1(),test2()]);
     console.log(data1);
     console.log(data2);
}
greet();
