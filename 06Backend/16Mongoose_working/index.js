const express=require("express");
const app=express();
const main=require("./database");
const User=require("./Models/users");

app.use(express.json());

app.get("/info", (req,res)=>{
    const ans=User.find({});
    res.send(ans);
})


main()
.then(()=>{
    console.log("Connected to DB")
    app.listen(3000,()=>{
         console.log("Listen at port 3000");
   }) 
   

})
.catch((err) => console.log(err));



