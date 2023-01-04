const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const crypto=require("crypto");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordChangedAt:Date,
  passwordresettoken:String,
  passwordresetexpires:Date,
  role:{
    type:String,
    default:"user"
  },
  isblocked:{
    type:Boolean,
    default:false
  },
  refreshtoken:{
    type:String,
  },
  cart:{
    type:Array,
    default:[],
  },
  // address:[{
  //   type:mongoose.Types.ObjectId,
  //   ref:"Address"
  // }],
  address:{
    type:String
  },
  wishlist:[{
    type:mongoose.Types.ObjectId,
    ref:"Product"
  }]
  },{
    timestamps:true
  })

userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
      next();
    }

    const salt = await bcrypt.genSaltSync(10);
    this.password= await bcrypt.hashSync(this.password, salt);
})

//here we created the function ispasswordmatched
userSchema.methods.isPasswordMatched=async function(enteredpassword){
    //true or false
    return await bcrypt.compare(enteredpassword,this.password);
}

//reset password
userSchema.methods.createPasswordResetToken=async function (){
  const resettoken=crypto.randomBytes(32).toString("hex");
  this.passwordresettoken= 
  crypto.createHash('sha256')
  .update(resettoken)
  .digest("hex");
  
    this.passwordresetexpires=Date.now()+30*60*1000; //10 mnutes
    return resettoken;
}

//Export the model
module.exports = mongoose.model("User", userSchema);
