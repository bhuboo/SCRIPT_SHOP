const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: { type: String, require: true, minlength: 4, maxlength: 30 },
  lname: { type: String, require: true, minlength: 1, maxlength: 30 },
  email: { type: String, require: true,unique:true},
  mnumber:{type: String, require:true,unique:true,maxlength:11 },
  Address:{type:String,require:true},
  password:{ type:String,require:true,minlength:8,maxlength:300},
});


const ScriptWriter = mongoose.model("scriptwriter",userSchema)

exports.ScriptWriter =ScriptWriter;