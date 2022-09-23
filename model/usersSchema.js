const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
   uName: {
      type: String,
      required: true
   },
   uEmail: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   imgPath: {
      type: String,
      required: true
   },
   date: {
      type: Date
   }
});

// create model

const users=new mongoose.model("users",userSchema);

module.exports=users;
