const express=require("express");
const app=express();

// parsing karni hota hai
app.use(express.json());



app.get("/user",(req,res)=>{
  res.send({name:"Joy"})
})


app.post("/user",(req,res)=>{

    console.log(req.body);
    // console.log(typeof req.body.age);
    // console.log(typeof req.body.name);
    res.send("Data saved Successfully");
})



// get , post . patch ,put ,delete
app.listen(4000,()=>{
    console.log("Listening at port 4000");
})