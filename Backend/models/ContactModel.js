
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    UserName:String,
    email:String,
    Phone:String,
    message:String,
});

module.exports=mongoose.model('Contact',ContactSchema);