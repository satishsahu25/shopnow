const Brand=require("../models/brandmodel");
const asynchandler=require("express-async-handler");
const validatemongodb=require("../utils/validate_mongodb_id");

const createbrand = asynchandler(async(req,res)=>{
try{
    const category=await Brand.create(req.body);
    res.json(category);

}catch(err){
    throw new Error(err);
}

});

const deletebrand = asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        const brand=await Brand.findByIdAndDelete(id);
        res.json({msg:"Successfully deleted brand"});
    
    }catch(err){
        throw new Error(err);
    }
    
});

const updatebrand = asynchandler(async(req,res)=>{
        const {id}=req.params;
        validatemongodb(id);
        try{
            const upbrand=await Brand.findByIdAndUpdate(id,req.body,{new:true});
            res.json(upbrand);
        
        }catch(err){
            throw new Error(err);
        }
        
});

const getbrand=asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        const brand=await Brand.findById(id);
        res.json(brand);
    
    }catch(err){
        throw new Error(err);
    }
});
const getallbrand=asynchandler(async(req,res)=>{
    try{
        const brand=await Brand.find();
        res.json(brand);
    
    }catch(err){
        throw new Error(err);
    }
});
        
module.exports={createbrand,updatebrand,getbrand,getallbrand, deletebrand};