
const mongoose = require('mongoose');
const doctorsSchema = new mongoose.Schema({

    name: String,
    specialization: String,
    experience: String,
    hospital: String,
    location: String,
    rating: Number,
    phone: String,
    image: String
});
module.exports = mongoose.model('doctors', doctorsSchema);