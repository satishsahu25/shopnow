const express=require("express");
const router=express.Router();
const {createblogcategory,getblogcategory,getallblogcategory, deleteblogcategory,updateblogcategory}=require("../controller/blogcatectrl");
const{authmiddle,isadmin}=require('../middlewares/authmiddleware');


router.post("/",authmiddle,isadmin,createblogcategory);
router.delete("/:id",authmiddle,isadmin,deleteblogcategory);
router.put("/:id",authmiddle,isadmin,updateblogcategory);
router.get("/:id",authmiddle,isadmin,getblogcategory);
router.get("/",getallblogcategory);

module.exports=router;