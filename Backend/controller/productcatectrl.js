const Category=require("../models/prodcategorymodel");
const asynchandler=require("express-async-handler");
const validatemongodb=require("../utils/validate_mongodb_id");

const createproductcategory = asynchandler(async(req,res)=>{
try{
    const category=await Category.create(req.body);
    res.json(category);

}catch(err){
    throw new Error(err);
}

});

const deleteproductcategory = asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        const category=await Category.findByIdAndDelete(id);
        res.json({msg:"Successfully deleted category"});
    
    }catch(err){
        throw new Error(err);
    }
    
});

const updateproductcategory = asynchandler(async(req,res)=>{
        const {id}=req.params;
        validatemongodb(id);
        try{
            const upcategory=await Category.findByIdAndUpdate(id,req.body,{new:true});
            res.json(upcategory);
        
        }catch(err){
            throw new Error(err);
        }
        
});

const getproductcategory=asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        const category=await Category.findById(id);
        res.json(category);
    
    }catch(err){
        throw new Error(err);
    }
});
const getallproductcategory=asynchandler(async(req,res)=>{
    try{
        const category=await Category.find();
        res.json(category);
    
    }catch(err){
        throw new Error(err);
    }
});
        
module.exports={createproductcategory,updateproductcategory,getproductcategory,getallproductcategory, deleteproductcategory};