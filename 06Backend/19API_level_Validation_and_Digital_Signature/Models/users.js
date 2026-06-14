const mongoose = require('mongoose');
const { Schema } = mongoose;


  // Code likhna shuru kar do
   const userSchema=new Schema({
     firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
     },
     lastName:{
         type:String
     },
     age:{
        type:Number,
        required:true,
        min:14,
        max:70
     },
     gender:{
        type:String,
         //enum:["male","female","others"]
        validate(value){
           if(!["male","female","others"].includes(value)){
              throw new Error("Invalid Gender");
           }
        } 
     },
     emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true       //update hbe na
     },
     password:{
        type:String,
        required:true
     },
     photo:{
        type:String,
        default:"This is the default photo"
     }
   },{timestamps:true})


const User=mongoose.model("user",userSchema);    

module.exports=User;
