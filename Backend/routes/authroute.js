const express=require('express');
const router=express.Router();
const {createuser,resetpassword,forgotpasswordtoken,updatepassword,loginuser,logout,handlerefreshtoken,blockuser,unblockuser,updateuser,getalluser,singleuser,deleteuser}=require('../controller/userctrl')
const {authmiddle,isadmin}=require('../middlewares/authmiddleware');


router.post("/register",createuser);
router.get("/refresh",handlerefreshtoken)
router.post("/login",loginuser);
router.post("/forgotpassword",forgotpasswordtoken);
router.put("/resetpassword/:token",resetpassword)
router.get("/logout",logout);
router.get("/allusers",getalluser);
router.get("/:id",authmiddle,isadmin,singleuser);
router.delete("/:id",deleteuser);
router.put("/update/:id",authmiddle,updateuser);
router.put("/blockuser/:id",authmiddle,isadmin,blockuser);
router.put("/unblockuser/:id",authmiddle,isadmin,unblockuser)
router.put("/updatepassword",authmiddle,updatepassword);


module.exports=router;
