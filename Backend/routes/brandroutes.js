const express=require("express");
const router=express.Router();
const {createbrand,getbrand,getallbrand, deletebrand,updatebrand}=require("../controller/brandctrl");
const{authmiddle,isadmin}=require('../middlewares/authmiddleware');


router.post("/",authmiddle,isadmin,createbrand);
router.delete("/:id",authmiddle,isadmin,deletebrand);
router.put("/:id",authmiddle,isadmin,updatebrand);
router.get("/:id",authmiddle,isadmin,getbrand);
router.get("/",authmiddle,isadmin,getallbrand);

module.exports=router;