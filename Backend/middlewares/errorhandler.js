//not found
const notfound=(req,res,next)=>{
    const error=new Error(`Not Found: ${req.url}`);
    res.status(404);
    next(error);
}

//for api
const errorhandle=(err,req,res,next)=>{
    const statuscode=res.statuscode===200?500:res.statusCode;
    res.status(statuscode);
    res.json({
        msg:err?.message,
        stack:err?.stack,
    })
}

module.exports={errorhandle,notfound};