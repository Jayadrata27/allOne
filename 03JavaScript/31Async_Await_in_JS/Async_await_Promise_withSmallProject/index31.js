cart=["pizza","coke","sandwich"];

function placeOrder(cart){
    console.log("Talking with Domino's");

    const pr=new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const food_available=true;

            if(food_available){
                console.log("Order Placed Succesfully");
                const order={orderId:221,food:cart,restaurant:"Dominos"} 
                resolve(order);
            }
            else{
                reject("Item Out of Stocks");
            }
        },2000)
    })

    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started");

    const pr=new Promise((resolve,reject)=>{

         setTimeout(()=>{
            console.log("Pizza preparation done");
            const foodDetails={token:12,restaurant:order.restaurant,location:order.location};
            resolve(foodDetails);
         },2000)
    })
    return pr;
}

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order");

    const pr=new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation=foodDetails.location;
            resolve(droplocation);
        },2000)
    })
    return pr;
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way ");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },2000)
}


// placeOrder(cart)
// .then((order)=>preparingOrder(order))
// .then((foodDetails)=>pickupOrder(foodDetails))
// .then((droplocation)=>deliverOrder(droplocation))
// .catch((error)=>console.log(error));


async function greet() {
   try{
      const order=await placeOrder(cart);
      const foodDetails=await preparingOrder(order);
      const droplocation=await pickupOrder(foodDetails);
      deliverOrder(droplocation);
   }
   catch(error){
      console.log(error);
   }
}
greet();