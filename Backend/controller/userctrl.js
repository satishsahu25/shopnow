const User = require("../models/usermodel");
const asynchandler = require("express-async-handler");
const { generatetoken } = require("../config/jsontoken");
const validatemongodb=require("../utils/validate_mongodb_id");
const {generaterefreshtoken}=require("../config/refreshtoken.js")
const jwt=require("jsonwebtoken");
require("dotenv").config();
const sendemail=require("./emailctrl");
const crypto=require("crypto");

const createuser = asynchandler(async (req, res) => {
  const email = req.body.email;
  const finduser = await User.findOne({ email: email });
  if (!finduser) {
    const newuser = await User.create(req.body);
    res.json(newuser);
  } else {
    // res.json({
    //     msg: "User already exists",
    //     success:false
    // })
    throw new Error("User Already exists");
  }
});
const loginuser = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  // console.log(email,password);
  const userfind = await User.findOne({ email: email });
  if (userfind && (await userfind.isPasswordMatched(password))) {
    const refreshtoken=await generaterefreshtoken(userfind?._id);
    const updateuser=await User.findByIdAndUpdate(userfind?._id,{
      refreshtoken:refreshtoken
    },{new:true});
    res.cookie("refreshtoken",refreshtoken,{
      httpOnly:true,
      maxAge:72*60*60*1000
    })

    res.json({
      id: userfind?._id,
      firstname: userfind?.firstname,
      lastname: userfind?.lastname,
      email: email,
      mobile: userfind?.mobile,
      token: generatetoken(userfind?._id),
    });
  } else {
    throw new Error("Invalid credentials");
  }
});
const getalluser = asynchandler(async (req, res) => {
  try {
    const getuser = await User.find();
    res.json(getuser);
  } catch (err) {
    throw new Error(err);
  }
});
const singleuser = asynchandler(async (req, res) => {
  const { id } = req.params;
  validatemongodb(id);
  try {
    const finduser = await User.findById({ _id: id });
    if (finduser) {
      res.json(finduser);
    } else {
      res.json({
        msg: "user not found",
      });
    }
  } catch (err) {
    throw new Error(err);
  }
});
const deleteuser = asynchandler(async (req, res) => {
  const { id } = req.params;
  validatemongodb(id);

  try {
    if (id) {
      const deleteduser = await User.findByIdAndDelete({ _id: id });
      res.json({
        msg: "Successfully deleted",
        deleteduser
      });
    }
  } catch (err) {
    throw new Error(err);
  }
});
const updateuser=asynchandler(async (req, res) => {
  // const {id}=req.params;
  const {_id}=req.user;
  validatemongodb(_id);

  try{
      const updateduser=await User.findByIdAndUpdate(_id,{
          firstname:req?.body.firstname,
          lastname:req?.body.lastname,
          email:req?.body.email,
          mobile:req?.body.mobile
      },{new:true});

      res.json(updateduser);

  }catch(err){
    throw new Error(err);
  }
});
const blockuser=asynchandler(async(req,res)=>{

    const {id}=req.params;
    validatemongodb(id);
    try{
      const block=await User.findByIdAndUpdate(id,{
        isblocked:true
      },{new:true});

      res.json({
        msg:"User blocked",
        block
      });
    }catch(err){
        throw new Error(err);
    }
});
const unblockuser=asynchandler(async(req,res)=>{
  const {id}=req.params;
  validatemongodb(id);
  try{
    const unblock=await User.findByIdAndUpdate(id,{
      isblocked:false
    },{new:true});

    res.json({
      msg:"user unblocked",
      unblock
    });
  }catch(err){
      throw new Error(err);
  }
  
});
const handlerefreshtoken=asynchandler(async(req,res)=>{
  const cookie=req.cookies;
  // console.log(cookie);
  if(!cookie?.refreshtoken) throw new Error("No refresh token found in cookies");
  const refreshtoken=cookie.refreshtoken;
  const user=await User.findOne({refreshtoken});
  if(!user) throw new Error("No user found")
  jwt.verify(refreshtoken,process.env.SECRETKEY,(err,decoded)=>{
    if(err || user.id!==decoded.id){
      throw new Error("There is something wrong with token")
    }
    const accesstoken=generatetoken(user?.id);
    res.json({accesstoken});
    // console.log(decoded);
  });

  res.json(user);
  // console.log(user);

});
const logout=asynchandler(async(req,res)=>{
    const cookie=req.cookies;
    if(!cookie?.refreshtoken) throw new Error("No refresh token found in cookies");
    const refreshtoken=cookie.refreshtoken;
    const user=await User.findOne({refreshtoken});
    if(!user){
      res.clearCookies("refreshtoken",{
        httpOnly:true,
        secure:true
      })
      return res.status(204);
    }

    await User.findOneAndUpdate(refreshtoken,{
      refreshtoken:"",
    });

    res.clearCookie("refreshtoken",{
      httpOnly:true,
      secure:true
    })
    return res.sendStatus(204);

});
const updatepassword=asynchandler(async(req,res)=>{
    const{_id}=req.user;
    const {password}=req.body;
    validatemongodb(_id);
    const user=await User.findById(_id);
    if(password){
      user.password=password;
      const updatepassword=await user.save();
      res.json(updatepassword);
    }else{
      res.json(user);
    }
    

});
const forgotpasswordtoken=asynchandler(async(req,res)=>{
  const {email}=req.body;
  const user=await User.findOne({email});
  if(!user) throw new Error("User not found with this email");
  try{
    const token=await user.createPasswordResetToken();
    await user.save();
    const reseturl=`Hi Please follow this link to reset your password, This link is valid for 10 minutes from now. <a href='http://localhost:5000/api/user/resetpassword/${token}'>Click here</a>`;

    const data={
      to:email,
      text:"Hey User",
      subject:"Forgot password link",
      htm:reseturl
    };
    sendemail(data);
    res.json(token);

  }catch(err){
    throw new Error(err);
  }
});
const resetpassword=asynchandler(async(req,res)=>{
  const {password}=req.body;
  const {token}=req.params;
  const hashedtoken=crypto.createHash('sha256').update(token).digest('hex');
  const user=await User.findOne({
    passwordresettoken:hashedtoken,
    passwordresetexpires:{$gt:Date.now()}
  });
  if(!user) throw new Error("Token expired Please try again");
  user.password=password;
  user.passwordresettoken=undefined;
  user.passwordresetexpires=undefined;
  await user.save();
  res.json(user);
})
module.exports = { createuser,resetpassword,forgotpasswordtoken,updatepassword,logout,handlerefreshtoken, blockuser,unblockuser,loginuser, updateuser,getalluser, singleuser ,deleteuser};
