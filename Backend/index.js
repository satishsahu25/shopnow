const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const PORT=process.env.PORT || 4000;
const db=require('./config/db.js');
const authrouter=require('./routes/authroute.js');
const bodyparser=require("body-parser");
const {notfound,errorhandle}=require('./middlewares/errorhandler')
const cookieparser=require("cookie-parser");
const prodroute=require("./routes/prodroutes.js")
const morgan=require("morgan");
const blogroute=require("./routes/blogroutes");
const prodcateroute=require("./routes/prodcategoryroutes");
const blogcateroute=require("./routes/blogcateroute");
const brandroute=require("./routes/brandroutes");
const couponroute=require("./routes/couponroutes");

db();
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser());
// app.use("/",(req,res)=>{
//     res.send("Hello from erver side")
// })

app.use("/api/user",authrouter);
app.use("/api/product",prodroute);
app.use("/api/blog",blogroute);
app.use("/api/productcategory",prodcateroute);
app.use("/api/blogcategory",blogcateroute);
app.use("/api/brand",brandroute);
app.use("/api/coupon",couponroute);
app.use(notfound);
app.use(errorhandle);

app.listen(PORT,()=>{
    console.log(`Server has connected at ${PORT}`);
});
