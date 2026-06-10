const express=require("express");
const app=express();
const main=require("./database");
const User=require("./Models/users");

app.use(express.json());

// CRUD: Create Read Update Delete

app.get("/info",async (req,res)=>{
    const ans=await User.find({}); 
    res.send(ans);
})


app.post("/info",async (req,res)=>{

    // const ans=new User(req.body);
    // await ans.save();

    try{
        await User.create(req.body);
       res.send("Successfully Updated");
    }
    catch(err){
        res.status(500).send(err);
    }

})

app.delete("/info",async (req,res)=>{
   await User.deleteOne({name:"Vishal"});
    res.send("Deleted");
})

app.put("/info",async (req,res)=>{
    const result=await User.updateOne({name:"Mohan"}, {age:40,city:"Bangladesh"});
    res.send("Updated Successfully")
})

main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000,()=>{
         console.log("Listen at port 3000");
   }) 

//    const result=await User.find({name:"Joy"});
//    console.log(result);
})
.catch((err) => console.log(err));



