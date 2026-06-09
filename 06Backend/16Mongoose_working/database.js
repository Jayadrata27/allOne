const mongoose = require('mongoose');

async function main() {

   await mongoose.connect('mongodb://joy69:pangla6969@ac-0ki5w1z-shard-00-00.bkokgxg.mongodb.net:27017,ac-0ki5w1z-shard-00-01.bkokgxg.mongodb.net:27017,ac-0ki5w1z-shard-00-02.bkokgxg.mongodb.net:27017/Bookstore?ssl=true&replicaSet=atlas-4p5yb4-shard-0&authSource=admin&appName=CoadingAdda');

   // Code likhna shuru kar do
   // const userSchema=new Schema({
   //    name:String,
   //    age:Number,
   //    city:String,
   //    gender:String
   // })

   // Model ko Create === Collection create karna(Table ko create karna)
   // Class create kari 
   // const User=mongoose.model("user",userSchema); 


   // Document ko create kiya hai or Object ko create kiya hai
   // const user1=new User({name:"Joy",age:21,city:"Kolkata",gender:"Male"});  // document create and insert by double line
   // await user1.save();

   // await User.create({name:"Mohan",city:"Pune",age:30});     //document create and insert by single line

   // await User.insertMany([{name:"Ipsita",age:18},{age:25,gender:"Male"}]);  //insert multiple data by single line

   // const ans=await User.find({});       // find all documents
   // console.log(ans);

   // const result=await User.find({name:"Joy"});    //find document by particular field
   // console.log(result);

}

// main()
// .then(()=>console.log("Connected to DB"))
//   .catch((err) => console.log(err));


module.exports=main;   //main function ko export kar diya



  