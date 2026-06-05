const express=require("express");
const app=express();
app.use(express.json());
const {Auth}=require("./middleware/auth");

// CRUD: Create Read Update Delete

// Database: array

const FoodMenu = [
  { id: 1, food: "Chowmein", category: "Veg", price: 500 },
  { id: 2, food: "Chicken Biryani", category: "Non-Veg", price: 250 },
  { id: 3, food: "Paneer Butter Masala", category: "Veg", price: 220 },
  { id: 4, food: "Mutton Curry", category: "Non-Veg", price: 320 },
  { id: 5, food: "Veg Fried Rice", category: "Veg", price: 180 },
  { id: 6, food: "Chicken Fried Rice", category: "Non-Veg", price: 220 },
  { id: 7, food: "Masala Dosa", category: "Veg", price: 120 },
  { id: 8, food: "Butter Naan", category: "Veg", price: 40 },
  { id: 9, food: "Dal Makhani", category: "Veg", price: 180 },
  { id: 10, food: "Fish Curry", category: "Non-Veg", price: 280 },
  { id: 11, food: "Veg Burger", category: "Veg", price: 150 },
  { id: 12, food: "Chicken Burger", category: "Non-Veg", price: 180 },
  { id: 13, food: "Margherita Pizza", category: "Veg", price: 350 },
  { id: 14, food: "Pepperoni Pizza", category: "Non-Veg", price: 450 },
  { id: 15, food: "Ice Cream", category: "Dessert", price: 90 },
  { id: 16, food: "Gulab Jamun", category: "Dessert", price: 60 }
];


// user ka jo bhi food add hoga, wo idhr jaayega
const AddToCart=[];



app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);
})



// Authenticate admin here
app.use("/admin",Auth);



app.post("/admin",(req,res)=>{

    FoodMenu.push(req.body);
    res.status(201).send("Item Added Successfully");
      
})



app.delete("/admin/:id",(req,res)=>{

      const Idd=parseInt(req.params.id);

        const index=FoodMenu.findIndex((item)=>item.id ===Idd);

        if(index===-1){
           res.send("Item doesnot Exist")
        }
        else{
            FoodMenu.splice(index,1);
            res.send("Successfully Deleted");
        }  
})


app.patch("/admin",(req,res)=>{

   
        const Idd=req.body.id;

        const fooddata=FoodMenu.find((item)=>item.id===Idd);

        if(fooddata){

           if(req.body.food){
               fooddata.food=req.body.food;
           }
           if(req.body.category){
               fooddata.category=req.body.category;
           }
           if(req.body.price){
              fooddata.price=req.body.price;
           }

           res.send("Successfully Updated");
        }
        else{
            res.send("Item not Exist")
        }
    })


app.listen(3000,()=>{
    console.log("Listening at port number 3000");
})