const mongoose=require("mongoose");

const validatemongodbid=(id)=>{
    const isvalid=mongoose.Types.ObjectId.isValid(id);
    if(!isvalid) throw new Error("This is not valid mongoose id");

}

module.exports=validatemongodbid;