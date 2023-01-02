const Coupon=require("../models/couponmodel");
const asynchandler=require("express-async-handler");
const validatemongodb=require("../utils/validate_mongodb_id");

const createcoupon=asynchandler(async(req,res)=>{

        try{
            const newCoupon=await Coupon.create(req.body);
            res.json(newCoupon);
        }catch(err){
            throw new Error(err);

        }
});
const getallcoupon=asynchandler(async(req,res)=>{

    try{
        const coupons=await Coupon.find();
        res.json(coupons);
    }catch(err){
        throw new Error(err);

    }
});
const updatecoupon=asynchandler(async(req,res)=>{
    const {cid}=req.params;
    validatemongodb(cid);
    try{
        const upcoupon=await Coupon.findByIdAndUpdate(cid,req.body,{new:true});
        res.json(upcoupon);
    }catch(err){
        throw new Error(err);

    }
});
const deletecoupon=asynchandler(async(req,res)=>{
    const {cid}=req.params;
    validatemongodb(cid);
    try{
        await Coupon.findByIdAndDelete(cid);
        res.json({
            msg:"Successfully deleted"
        });
    }catch(err){
        throw new Error(err);

    }
});

module.exports={createcoupon,updatecoupon,deletecoupon,getallcoupon};