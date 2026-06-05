const express=require("express");
const app=express();
app.use(express.json());


// Router Handler(RH)
// app.use(route , [RH ,RH ,RH , RH] , RH ,RH)
// Middleware(mw): mw-> mw-> mw-> RequestHandler

// Maintain logs through middleware
app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    // Authorization wagera kar sakta hu
    next();
})

app.use("/user",(req,res,next)=>{
    console.log("First");
    // res.send("Hello Ji");
    next()
    console.log("Sixth");

},
(req,res,next)=>{
    console.log("Second");
    // res.send("Hello I am Second");
    next();
    console.log("Fifth");
},
(req,res)=>{                                  
    console.log("Third");
    res.send("Hello I am Third");               //ata jehetu final call tai ata Request handeler
    console.log("Fourth");
}
)



app.listen(4000,()=>{
    console.log("Listening at port number 4000");
})