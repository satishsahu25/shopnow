const express=require("express");
const router=express.Router();
const {createproductcategory,getproductcategory,getallproductcategory, deleteproductcategory,updateproductcategory}=require("../controller/productcatectrl");
const{authmiddle,isadmin}=require('../middlewares/authmiddleware');


router.post("/",authmiddle,isadmin,createproductcategory);
router.delete("/:id",authmiddle,isadmin,deleteproductcategory);
router.put("/:id",authmiddle,isadmin,updateproductcategory);
router.get("/:id",authmiddle,isadmin,getproductcategory);
router.get("/",getallproductcategory);

module.exports=router;