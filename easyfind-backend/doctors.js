
const mongoose= require('mongoose');
 const doctorsSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String,
 });
module.exports=mongoose.model('doctors',doctorsSchema);