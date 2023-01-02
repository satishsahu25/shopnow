const User=require("../models/usermodel")
const jwt=require("jsonwebtoken")
const asynchandler=require('express-async-handler')
require("dotenv").config();

const authmiddle=asynchandler(async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1];
        try{
            if(token){
                const decoded=jwt.verify(token,process.env.SECRETKEY);
                // console.log(decoded)
                const user=await User.findById(decoded?.id);
                req.user=user;
                next();
            }

        }catch(err){
            throw new Error("Token expired: Please login again")
        }
    }else{
        throw new Error("There is no token attached")
    }
})

const isadmin=asynchandler(async(req,res,next)=>{
    const {email}=req.user;
    const adminuser=await User.findOne({email:email});
    if(adminuser.role!=="admin"){
        throw new Error("You are not admin")
    }else{
       next();
    }
})
module.exports={authmiddle,isadmin}