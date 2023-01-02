const express=require("express");
const router=express.Router();
const {authmiddle,isadmin}=require('../middlewares/authmiddleware');
const {createBlog,uploadblogimages,likeblog,dislikeblog,deleteBlog,getallblogs,getBlog,updateBlog}=require("../controller/blogctrl");
const {uploadphoto,blogimgresize} =require("../middlewares/uploadimages");


router.post("/",authmiddle,isadmin,createBlog);
router.put("/update/:id",authmiddle,isadmin,updateBlog);
router.get("/:id",getBlog);
router.put("/upload/:id",uploadphoto.array('images',10),blogimgresize,uploadblogimages)
router.get("/",getallblogs);
router.delete("/:id",authmiddle,isadmin,deleteBlog);
router.put("/likes",authmiddle,likeblog);
router.put("/dislikes",authmiddle,dislikeblog);

module.exports=router;