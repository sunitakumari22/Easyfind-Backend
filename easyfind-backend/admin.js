const mongoose= require('mongoose');
 const adminShema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String,
 });
module.exports=mongoose.model('admin',adminShema);