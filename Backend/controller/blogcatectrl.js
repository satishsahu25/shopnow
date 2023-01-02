const BlogCategory=require("../models/blogcatemodel");
const asynchandler=require("express-async-handler");
const validatemongodb=require("../utils/validate_mongodb_id");

const createblogcategory = asynchandler(async(req,res)=>{
try{
    const category=await BlogCategory.create(req.body);
    res.json(category);

}catch(err){
    throw new Error(err);
}

});

const deleteblogcategory = asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        const blogcategory=await BlogCategory.findByIdAndDelete(id);
        res.json({msg:"Successfully deleted blogcategory"});
    
    }catch(err){
        throw new Error(err);
    }
    
});

const updateblogcategory = asynchandler(async(req,res)=>{
        const {id}=req.params;
        validatemongodb(id);
        try{
            const upblogcategory=await BlogCategory.findByIdAndUpdate(id,req.body,{new:true});
            res.json(upblogcategory);
        
        }catch(err){
            throw new Error(err);
        }
        
});

const getblogcategory=asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        const blogcategory=await BlogCategory.findById(id);
        res.json(blogcategory);
    
    }catch(err){
        throw new Error(err);
    }
});
const getallblogcategory=asynchandler(async(req,res)=>{
    try{
        const blogcategory=await BlogCategory.find();
        res.json(blogcategory);
    
    }catch(err){
        throw new Error(err);
    }
});
        
module.exports={createblogcategory,updateblogcategory,getblogcategory,getallblogcategory, deleteblogcategory};