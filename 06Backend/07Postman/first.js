const express=require("express");
const app=express();


app.use(express.json());


const BookStore=[
    {id:1,name:"Harry Potter", author:"DevFlux"},
    {id:2,name:"Friends",author:"Vikash"},
    {id:3,name:"Nexus",author:"Rohit"}
]

app.get("/book",(req,res)=>{
    res.send(BookStore);
})

app.get('/book/:id',(req,res)=>{
   const id=parseInt(req.params.id);
   const Book=BookStore.find((info)=>info.id===id);
   res.send(Book);
})

app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data saved Successfully");
})

app.listen(3000,()=>{
    console.log("Listening at port number 3000");
})