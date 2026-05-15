// callback hell

// Domino's pizza order kar hahe ho:
function placeOrder(callback){
    console.log("Talking with Domino's");

    setTimeout(()=>{
        console.log("Order Placed Successfully");
        callback();
    },2000)
}
function preparingOrder(callback){
    console.log("Pizza preparation started");

    setTimeout(()=>{
        console.log("Pizza preparation done");
        callback();
    },5000)
}

function pickupOrder(callback){
    console.log("Reaching restaurant for pickup Order");

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
    },3000)
}
function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
       console.log("Order delivered Successfully");
    },3000)
}
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
           deliverOrder();
        })
    });
})

