const cloudinary=require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key:process.env.APIKEY,
  api_secret:process.env.APISECRET
});

const cloudinaryupload=async(filetoupload)=>{
    return new Promise((resolve)=>{
        cloudinary.uploader.upload(filetoupload,(result)=>{
            resolve(
                {url:result.secure_url},
                {resource_type:"auto"}
            );
        });
    });
};

module.exports = cloudinaryupload;