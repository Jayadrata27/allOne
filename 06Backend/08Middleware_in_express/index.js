const express=require("express");
const app=express();


app.use(express.json());


const BookStore=[
    {id:1,name:"Harry Potter", author:"DevFlux"},
    {id:2,name:"Friends",author:"Vikash"},
    {id:3,name:"Nexus",author:"Rohit"},
    {id:4,name:"DSA",author:"Maharaj"},
    {id:5,name:"Prem Kahani",author:"Rohan"},
    {id:6,name:"Hello",author:"Vikash"}
]


app.get("/book",(req,res)=>{

   const Book=BookStore.filter((info)=>info.author === req.query.author);
   res.send(Book);
})

app.get('/book/:id',(req,res)=>{
   const Idd=parseInt(req.params.id);
   const Book=BookStore.find((info)=>info.id===Idd);
   res.send(Book);
})


app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data saved Successfully");
})


app.patch("/book",(req,res)=>{

    const Book=BookStore.find((info)=>info.id===req.body.id)

    if(req.body.author){
        Book.author=req.body.author;
    }

    if(req.body.name){
        Book.name=req.body.name;
    }

    res.send("Patch Update");
})


app.put("/book",(req,res)=>{
    const Book=BookStore.find((info)=>info.id===req.body.id);

      Book.author=req.body.author;

      Book.name=req.body.name;

      res.send("Changes Updated Succesfully");
 
})



app.delete('/book/:id',(req,res)=>{

    const Idd=parseInt(req.params.id);

    const index=BookStore.findIndex((info)=>info.id === Idd);

    BookStore.splice(index,1);

    res.send("Successfully Deleted");

})



app.listen(3000,()=>{
    console.log("Listening at port number 3000");
})