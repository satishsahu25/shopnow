const jwt=require('jsonwebtoken');
require('dotenv').config();
const generaterefreshtoken=(id)=>{
    return jwt.sign({id},process.env.SECRETKEY,{expiresIn:"3d"});
}

module.exports={generaterefreshtoken}
