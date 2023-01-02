const express=require("express");
const router=express.Router();
const{authmiddle,isadmin}=require('../middlewares/authmiddleware');
const {createcoupon,updatecoupon,deletecoupon,getallcoupon}=require("../controller/couponctrl");

router.post("/",authmiddle,isadmin,createcoupon);
router.get("/",authmiddle,isadmin,getallcoupon);
router.put("/:cid",authmiddle,isadmin,updatecoupon);
router.delete("/:cid",authmiddle,isadmin,deletecoupon);

module.exports=router;