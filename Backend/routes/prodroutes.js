const express=require("express");
const router=express.Router();
const {
    getaproduct,
    createproduct,
    updateproduct,
    deleteproduct,
    addtowishlist,
    ratings,uploadimages,
    getallproduct}=require("../controller/prodctrl.js")
const {isadmin,authmiddle}=require("../middlewares/authmiddleware")
const {uploadphoto,productimgresize} =require("../middlewares/uploadimages");

// router.post("/")

router.post("/create",authmiddle,isadmin,createproduct);
router.get("/:id",getaproduct);
router.get("/",getallproduct);
router.put("/upload/:id",uploadphoto.array('images',10),productimgresize,uploadimages);
router.put("/rating",authmiddle,ratings);
router.put("/wishlist",authmiddle,addtowishlist);
router.delete("/:id",authmiddle,isadmin,deleteproduct);
router.put("/:id",authmiddle,isadmin,updateproduct);

module.exports=router