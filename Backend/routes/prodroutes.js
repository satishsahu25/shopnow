const express=require("express");
const router=express.Router();
const {
    getaproduct,
    createproduct,
    updateproduct,
    deleteproduct,
    getallproduct}=require("../controller/prodctrl.js")
const {isadmin,authmiddle}=require("../middlewares/authmiddleware")

// router.post("/")

router.post("/create",authmiddle,isadmin,createproduct);
router.get("/:id",getaproduct);
router.get("/",getallproduct)
router.delete("/:id",authmiddle,isadmin,deleteproduct);
router.put("/:id",authmiddle,isadmin,updateproduct)

module.exports=router