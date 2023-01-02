const jwt=require('jsonwebtoken');
require('dotenv').config();
const generatetoken=(id)=>{
    return jwt.sign({id},process.env.SECRETKEY,{expiresIn:"1d"});
}

module.exports={generatetoken}
