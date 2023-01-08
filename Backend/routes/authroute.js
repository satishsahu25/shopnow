const express=require('express');
const router=express.Router();
const {createuser,alluserorders,
    updateorderstatus,getorders,
    createorder,applycoupon,
    usercart,emptycart,getusercart,
    saveaddress,getwishlist,loginadmin,
    resetpassword,forgotpasswordtoken,updatepassword,
    loginuser,logout,blockuser,unblockuser,updateuser,
    getalluser,singleuser,deleteuser}=require('../controller/userctrl')
const {authmiddle,isadmin}=require('../middlewares/authmiddleware');
router.post("/register",createuser);
// router.get("/refresh",handlerefreshtoken)
router.post("/login",loginuser);
router.post("/adminlogin",loginadmin);
router.post("/forgotpassword",forgotpasswordtoken);
router.put("/resetpassword/:token",resetpassword)
router.post("/logout",logout);
router.get("/wishlist",authmiddle,getwishlist);
router.post("/cart",authmiddle,usercart);
router.delete("/cart",authmiddle,emptycart);
router.get("/cart",authmiddle,getusercart);
router.post("/cart/coupon",authmiddle,applycoupon);
router.put("/saveaddress",authmiddle,saveaddress);
router.post("/cart/cashorder",authmiddle,createorder);

router.get("/order",authmiddle,getorders);
router.get("/allorders",authmiddle,isadmin,alluserorders);

router.put("/updateorder/:id",authmiddle,isadmin,updateorderstatus);
router.get("/allusers",getalluser);
router.get("/:id",authmiddle,isadmin,singleuser);
router.delete("/:id",deleteuser);
router.put("/update/:id",authmiddle,updateuser);
router.put("/blockuser/:id",authmiddle,isadmin,blockuser);
router.put("/unblockuser/:id",authmiddle,isadmin,unblockuser)
router.put("/updatepassword",authmiddle,updatepassword);


module.exports=router;
