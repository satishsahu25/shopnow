const Product=require("../models/productmodel.js");
const asynchandler=require("express-async-handler");
const slugify=require("slugify");
const User=require("../models/usermodel.js");
const validatemongodb=require("../utils/validate_mongodb_id");
const cloudinary=require("../config/cloudinary")
const fs=require("fs");

const createproduct=asynchandler(async(req,res)=>{
    try{
        if(req.body.title){
            req.body.slug=slugify(req.body.title);
        }
        const newproduct=await Product.create(req.body);
        res.json(newproduct)

    }catch(err){
        throw new Error(err);
    }
});

const getaproduct=asynchandler(async(req,res)=>{
    const {id}=req.params;
    try{
        const findproduct=await Product.findById(id);
        res.json(findproduct);

    }catch(err){
        throw new Error(err);
    }
});

const updateproduct=asynchandler(async(req,res)=>{
    const {id}=req.params;
    try{
        if(req.body.title){
            req.body.slug=slugify(req.body.title);
        }
        const product=await Product.findOneAndUpdate(id,
            req.body
        ,{new:true});
        res.json(product);

    }catch(err){
        throw new Error(err)
    }
});

const deleteproduct=asynchandler(async(req,res)=>{
    const {id}=req.params;
    try{
        const product=await Product.findByIdAndDelete(id);
        res.json(product);

    }catch(err){
        throw new Error(err);
    }
});

const getallproduct=asynchandler(async(req,res)=>{
    // console.log(req.query);
    try{

        // ************FILTERING*******
        // const getallproducts=await Product.find({
        //     brand:req.query.brand,
        //     category:req.query.category,
        // });
        const queryobj={...req.query};
        const excludefields=['page','sort','limit','fields'];
        const queryobj2=excludefields.forEach((ele)=> delete queryobj[ele]);
        // console.log(queryobj);
        let queryStr=JSON.stringify(queryobj);
        queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);
        // console.log(JSON.parse(q/ueryStr));
        let query=Product.find(JSON.parse(queryStr));
        // const getallproducts=await Product.where("category").equals(req.query.category);
        


        // *********SORTING**********
        if(req.query.sort){
            const sortby=req.query.sort.split(",").join(" ");
            query=query.sort(sortby); 
        }else{
                query=query.sort("-createdAt");
        }


        // *******Limiting the fields*********
        if(req.query.fields){
                const fields=req.query.fields.split(",").join(" ");
                query=query.select(fields);
        }else{
            query=query.select("-__v");
        }
        
        // **********pagination********
        const page=req.query.page;
        const limit=req.query.limit;
        const skip=(page-1)*limit;
        query=query.skip(skip).limit(limit);
        if(req.query.page){
            const productcount=await Product.countDocuments();
            if(skip>=productcount) throw new Error("This page does not exists")
        }

        const products=await query;
        res.json(products);

    }catch(err){
        throw new Error(err);
    }
});

const ratings=asynchandler(async (req, res) => {
    const {_id}=req.user;
    const {star,prodid,comment}=req.body;
   try{
    const product=await Product.findById(prodid);
    let alreadyrated=product.ratings.find((userId)=>userId.postedby.toString()===_id.toString());
    if(alreadyrated){
        const updaterating=await Product.updateOne(
            
               { ratings:{$elemMatch:alreadyrated}},
                {$set:{"ratings.$.star":star,"ratings.$.comment":comment}},
                {new:true}
            
        );
    }else{
        const rateproduct=await Product.findByIdAndUpdate(prodid,{
            $push:{ratings:{
                star:star,
                comment:comment,
                postedby:_id
            }}
        },{new:true});
    }

    const getallratings=await Product.findById(prodid);
    let totalrating=getallratings.ratings.length;
    let ratingsum=getallratings.ratings.map((item)=>item.star).reduce((prev,curr)=>prev+curr,0);
    let actualrating=Math.round(ratingsum/totalrating);
    let finalproduct=await Product.findByIdAndUpdate(prodid,{
        totalratings:actualrating
    },{new:true});

    res.json(finalproduct)
   }catch(err){
    throw new Error(err);
   }


});

const uploadimages=asynchandler(async(req,res)=>{
    // console.log(req.files);
    const {id}=req.params; //product id
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
        const findproduct=await Product.findByIdAndUpdate(id,{images:urls.map((url)=>{return url})},{new:true});
        res.json(findproduct);
    }catch(err){
        throw new Error(err);
    }

});
const addtowishlist=asynchandler(async (req, res) => {
  const {_id}=req.user;
  const {prodid}=req.body;
  validatemongodb(prodid);
  try{
      const user=await User.findById(_id);
      const alreadyadded=user.wishlist.find((id)=>id.toString()===prodid);
      if(alreadyadded){
          let user=await User.findByIdAndUpdate(_id,{
              $pull:{wishlist:prodid},
          },{new:true});
          res.json(user);
      }else{
          let user=await User.findByIdAndUpdate(_id,{
              $push:{wishlist:prodid},
          },{new:true});
          res.json(user);
      }

  }catch(err){
      throw new Error(err);
  }
});

module.exports={createproduct,addtowishlist,uploadimages,ratings,updateproduct,deleteproduct, getaproduct,getallproduct};