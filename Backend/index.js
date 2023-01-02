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
app.use(notfound);
app.use(errorhandle);

app.listen(PORT,()=>{
    console.log(`Server has connected at ${PORT}`);
});
