const express=require("express");

const app=express();

app.use("/about/:id" , (req,res)=>{ 
    console.log(req.params);
    
    res.send({"name":"Joy","age":21 , "money":1000 , "Mon":20});
})

app.use("/contact",(req,res)=>{
    res.send("I am your contact page");
})

app.use("/detail",(req,res)=>{
    res.send("I am yur details page");
})

app.use("/",(req,res)=>{
    res.send("I am home page");
})

app.listen(4000,()=>{
    console.log("Listening at port 4000");
})