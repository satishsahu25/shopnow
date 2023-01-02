const Blog=require("../models/blogmodel");
const validatemongodb=require("../utils/validate_mongodb_id");
const User=require("../models/usermodel.js")
const asynchandler=require("express-async-handler");
const cloudinary=require("../config/cloudinary")
const fs=require("fs");

const createBlog = asynchandler(async(req,res)=>{
    try{
        const newblog=await Blog.create(req.body);
        res.json({
            newblog
        });
    }catch(err){
        throw new Error(err);
    }
});

const updateBlog = asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        const updateblog=await Blog.findByIdAndUpdate(id,req.body,{new:true});
        res.json({
            updateblog
        });
    }catch(err){
        throw new Error(err);
    }
});

const getBlog = asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        const getblog=await Blog.findById(id).populate("likes");
        await Blog.findByIdAndUpdate(id,{
            $inc:{numviews:1},
        },{new:true});

        res.json({
            getblog
        });
    }catch(err){
        throw new Error(err);
    }
});

const getallblogs=asynchandler(async(req,res)=>{
    try{
        const allblogs=await Blog.find();
        res.json(allblogs);
    }catch(err){
        throw new Error(err);
    }
});

const deleteBlog = asynchandler(async(req,res)=>{
    const {id}=req.params;
    validatemongodb(id);
    try{
        await Blog.findByIdAndDelete(id);
        res.json({
            msg:"Successfully deleted"
        });
    }catch(err){
        throw new Error(err);
    }
});

const likeblog=asynchandler(async(req,res)=>{
    const {blogid}=req.body;
    validatemongodb(blogid);
    //blog finding to be liked
    const blog=await Blog.findById(blogid);
    //finding loggedin user
    const loginuserid=req?.user?._id;
    //finding liked
    const isliked=blog?.isliked;
    //for dislike
    const alreadydisliked=blog?.dislikes?.find(userId=>userId?.toString()===loginuserid?.toString());
    if(alreadydisliked){
        const blog=await Blog.findByIdAndUpdate(blogid,{
            $pull:{dislikes:loginuserid},
            isdisliked:false
        },{new:true});
        res.json(blog)
    }
    if(isliked){
        const blog=await Blog.findByIdAndUpdate(blogid,{
            $pull:{likes:loginuserid},
            //removing the userid from likes array
            isliked:false
        },{new:true});
        res.json(blog)
    }else{
        const blog=await Blog.findByIdAndUpdate(blogid,{
            $push:{likes:loginuserid},
            //removing the userid from likes array
            isliked:true
        },{new:true});
        res.json(blog);
    }
});

const dislikeblog=asynchandler(async(req,res)=>{
    const {blogid}=req.body;
    validatemongodb(blogid);
    //blog finding to be liked
    const blog=await Blog.findById(blogid);
    //finding loggedin user
    const loginuserid=req?.user?._id;
    //finding liked
    const isdisliked=blog?.isdisliked;
    //for dislike
    const alreadyliked=blog?.likes?.find(userId=>userId?.toString()===loginuserid?.toString());
    if(alreadyliked){
        const blog=await Blog.findByIdAndUpdate(blogid,{
            $pull:{likes:loginuserid},
            isliked:false
        },{new:true});
        res.json(blog)
    }
    if(isdisliked){
        const blog=await Blog.findByIdAndUpdate(blogid,{
            $pull:{dislikes:loginuserid},
            //removing the userid from likes array
            isdisliked:false
        },{new:true});
        res.json(blog);
    }else{
        const blog=await Blog.findByIdAndUpdate(blogid,{
            $push:{dislikes:loginuserid},
            //removing the userid from likes array
            isdisliked:true
        },{new:true});
        res.json(blog);
    }
});

const uploadblogimages=asynchandler(async(req,res)=>{
    // console.log(req.files);
    const {id}=req.params; //blog id
    validatemongodb(id);
    try{
        const uploader=(path)=>cloudinary(path,"images");
        const urls=[];
        const files=req.files;
        for(const file of files){
                const {path}=file;
                const newpath=await uploader(path);
                urls.push(newpath);
                fs.unlinkSync(path);
        }
        const findblog=await Blog.findByIdAndUpdate(id,{images:urls.map((url)=>{return url})},{new:true});
        res.json(findblog);
    }catch(err){
        throw new Error(err);
    }

})

module.exports={createBlog,uploadblogimages,updateBlog,dislikeblog,deleteBlog,getallblogs,likeblog,getBlog};