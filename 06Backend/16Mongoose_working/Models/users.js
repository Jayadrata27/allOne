const mongoose = require('mongoose');
const { Schema } = mongoose;


  // Code likhna shuru kar do
   const userSchema=new Schema({
      name:String,
      age:Number,
      city:String,
      gender:String
   })


// Model ko Create === Collection create karna(Table ko create karna)
// Class create kari 
const User=mongoose.model("user",userSchema);    
