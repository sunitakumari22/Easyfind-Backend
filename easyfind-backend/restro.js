const mongoose = require('mongoose');
const restroSchema = new mongoose.Schema({

    name:String,
    rating:Number,
    reviews:Number,
    trust:Boolean,
    verified:Boolean,
    topSearch:Boolean,
    address:String,
    serviceFeedback:String,
    suggestions:Number,
    amenities:String,
    phone:String,
    whatsappLink:String,
    recentEnquiries:Number,
    image:String
});
module.exports = mongoose.model('restro', restroSchema);