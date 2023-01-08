const User = require("../models/usermodel");
const Product = require("../models/productmodel");
const Cart = require("../models/cartmodel");
const Order = require("../models/ordermodel");
const Coupon = require("../models/couponmodel");
const asynchandler = require("express-async-handler");
const { generatetoken } = require("../config/jsontoken");
const validatemongodb=require("../utils/validate_mongodb_id");
const {generaterefreshtoken}=require("../config/refreshtoken.js")
const jwt=require("jsonwebtoken");
require("dotenv").config();
const sendemail=require("./emailctrl");
const crypto=require("crypto");
const uniqid=require("uniqid");


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

//admin login
const loginadmin= asynchandler(async (req, res) => {
  const { email, password } = req.body;
  // console.log(email,password);
  const adminfind = await User.findOne({ email: email });
  if(adminfind){
    if(adminfind.role!=="admin") throw new Error("Not authorized admin");
    if (adminfind && (await adminfind.isPasswordMatched(password))) {
      const refreshtoken=await generaterefreshtoken(adminfind?._id);
      const updateuser=await User.findByIdAndUpdate(adminfind?._id,{
        refreshtoken:refreshtoken
      },{new:true});
      res.cookie("refreshtoken",refreshtoken,{
        httpOnly:true,
        maxAge:72*60*60*1000
      })
  
      res.json({
        user:{id: adminfind?._id,
        firstname: adminfind?.firstname,
        lastname: adminfind?.lastname,
        email: email,
        mobile: adminfind?.mobile,
        token: generatetoken(adminfind?._id),},
        msg:"Admin Login success"
      });
    }else{
      return res.status(400).json({
        user:null,
        msg:"Invalid credentials"
      })
    }
  }else {
    return res.json({
      user:null,
      msg:"No admin found"
    })
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

const saveaddress=asynchandler(async(req,res)=>{
  const {_id}=req.user;
  try{

      const updateuser=await User.findByIdAndUpdate(_id,{
        address:req?.body?.address
      },{new:true});
      res.json(updateuser);
  }catch(err){
    throw new Error(err);
  }

})
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
});

const getwishlist=asynchandler(async(req,res)=>{
  const {_id}=req.user;
  validatemongodb(_id);
  try{
    const finduser=await User.findById(_id).populate("wishlist");
    res.json(finduser);
  }catch(err){
      throw new Error(err);
  }
});

const usercart=asynchandler(async(req,res)=>{
  const {cart}=req.body;
  const {_id}=req.user;
  const user=await User.findById(_id);
  validatemongodb(_id);
  try{
    let products=[];
    const user=await User.findById(_id);
    //check if user already have product in cart
    const alreadycarted=await Cart.findOne({orderby:user._id});
    if(alreadycarted){
      alreadycarted.remove();
    }
    for(let i=0;i<cart.length;i++){
      let object={};
      object.product=cart[i]._id;
      object.count=cart[i].count;
      object.color=cart[i].color;
      let getprice=await Product.findById(cart[i]._id).select("price").exec();
      object.price=getprice.price;
      products.push(object);
      }
      let carttotal=0;
      for(let i=0;i<products.length;i++){
        carttotal+=products[i].price*products[i].count;
      }
      // console.log(products,carttotal);
      let newcart=await new Cart({
        products,
        carttotal,
        orderby:user?._id,
      }).save();
      res.json(newcart);

  }catch(err){
    throw new Error(err);
  }
});

const getusercart=asynchandler(async(req,res)=>{
  const {_id}=req.user;
  validatemongodb(_id);
  try{
    const cart=await Cart.findOne({orderby:_id}).populate("products.product","_id title price totalafterdiscount");
    res.json(cart);
  }catch(err){
    throw new Error(err);
  }
});

const emptycart=asynchandler(async(req,res)=>{
  const {_id}=req.user;
  validatemongodb(_id);
  try{
    const user=await User.findOne(_id);
    const cart=await Cart.findOneAndRemove({orderby:user._id});
    res.json(cart);
  }catch(err){
    throw new Error(err);
  }
});

const applycoupon=asynchandler(async(req,res)=>{
  const {coupon}=req.body;
  const {_id}=req.user;
  const validcoupon=await Coupon.findOne({name:coupon});
  if(validcoupon===null){
    throw new Error("Not valid coupon");

  }
  const user=await User.findOne({_id});
  let {products,carttotal}=
  await Cart.findOne({orderby:user._id}).populate("products.product");
  // console.log(validcoupon)
  let totalafterdiscount=(carttotal-(carttotal*validcoupon.discount)/100).toFixed(2);
  await Cart.findOneAndUpdate({orderby:user._id},
    {totalafterdiscount},
    {new:true});
    res.json(totalafterdiscount);
});

const createorder=asynchandler(async(req,res)=>{
  const{COD,couponApplied}=req.body;
  const {_id}=req.user;
  validatemongodb(_id);
 try{
  if(!COD) throw new Error("Create cash order failed");
  const user=await User.findById(_id);
  let usercart=await Cart.findOne({orderby:user?._id});
  let finalamount=0;
  if(couponApplied && usercart.totalafterdiscount){
    finalamount=usercart.totalafterdiscount;
  }else{
    finalamount=usercart.carttotal;
  }

  let neworder=await new Order({
    products:usercart.products,
    paymentintent:{
      id:uniqid(),
      method:"COD",
      amount:finalamount,
      status:"Cash on Delivery",
      created:Date.now(),
      currency:"usd"
    },
    orderby:user._id,
    orderstatus:"Cash on Delivery"
  });
  await neworder.save();


  let update=usercart.products.map((item)=>{
    return {
      updateone:{
        filter:{_id:item.product._id},
        update:{$inc:{quantity:-item.count,sold:+item.count}}
      },
    };
  });

  const updated=await Product.bulkWrite(update,{});
  res.json(updated);
 }catch(err){
  throw new Error(err);
 }
});

const getorders=asynchandler(async(req,res)=>{
  const {_id}=req.user;
  validatemongodb(_id);
  try{
    const userorders=await Order.findOne({orderby:_id}).populate('products.product orderby').exec();
    res.json(userorders);
  }catch(err){
    throw new Error(err);
  }
});
const alluserorders=asynchandler(async(req,res)=>{
  try{
    const allorders=await Order.find().populate('products.product orderby').exec();
    res.json(allorders);
  }catch(err){
    throw new Error(err);
  }
});

const updateorderstatus=asynchandler(async(req,res)=>{
  const{ status}=req.body;
  const {id}=req.params;
  validatemongodb(id);
 try{
  const updateorderstatus=await Order.findByIdAndUpdate(id,{
    orderstatus:status,
    paymentintent:{
      status:status
    }
},{new:true});
  res.json(updateorderstatus);
 }catch(err){
  throw new Error(err);
 }
});

module.exports = { alluserorders,createuser,getorders,updateorderstatus,createorder,applycoupon,emptycart,getusercart,usercart,saveaddress,getwishlist,loginadmin,resetpassword,forgotpasswordtoken,updatepassword,logout,handlerefreshtoken, blockuser,unblockuser,loginuser, updateuser,getalluser, singleuser ,deleteuser};
