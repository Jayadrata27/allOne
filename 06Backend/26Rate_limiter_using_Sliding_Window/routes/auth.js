const express=require("express");
const authRouter=express.Router();
const bcrypt=require("bcrypt");
const User=require("../Models/users");
const redisClient = require("../config/redis");
const jwt = require('jsonwebtoken');
const userAuth=require("../middleware/userAuth");


//  /auth/register
authRouter.post("/register",async (req,res)=>{

    try{
       //Validate kya uske andar firstname
       validUser(req.body)

      //  Converting password into hashing 
       req.body.password=await bcrypt.hash(req.body.password,100);

       await User.create(req.body);
       res.send("User Registered Successfully");
    }
    catch(err){
        res.send("Error"+err.message);
    }
})


//  /auth/login
authRouter.post("/login",async(req,res)=>{
   try{
      // vaidate korna
      const people=await User.findOne({emailId:req.body.emailId});
      

      const IsAllowed=people.verifyPassword(req.body.password);

      if(!IsAllowed){
         throw new Error("Invalid credentials");
      }

      // JWT token
      const token=people.getJWT();     //token generate


      res.cookie("token",token);     

      res.send("Login Successfully");

   }
   catch(err){
      res.send("Error "+err.message);
   }
})


//  /auth/logout
// Reddis ke database mein humko Blocked Token

authRouter.post("/logout",userAuth, async(req,res)=>{
   try{
     
      const {token}=req.cookies;
      // console.log(token);

      const payload=jwt.decode(token);
      // console.log(payload);

      await redisClient.set(`token:${token}`,"Blocked");
      // await redisClient.expire(`token${token}`,1800);
      await redisClient.expireAt(`token:${token}`,payload.exp);

      res.cookie("token",null,{expires:new Date(Date.now())});   
      res.send("Logged Out Successfully");

   }
   catch(err){
      res.send("Error "+err.message);
   }
})


module.exports=authRouter;