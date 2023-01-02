const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  numviews: {
    type: Number,
    default: 0,
  },
  isliked: { type: Boolean, default: false },
  isdisliked:{type:Boolean,default:false},
  likes:[{
    type:mongoose.Types.ObjectId,
    ref:'User'
  }],dislikes:[{
    type:mongoose.Types.ObjectId,
    ref:'User'
  }],
  image:{
    type:String,
    default:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  },
  author:{
    type:String,
    default:"admin"
  }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
    timestamps:true
});

//Export the model
module.exports = mongoose.model("Blog", blogSchema);
