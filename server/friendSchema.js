
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema that corresponds with Friend class
const friendSchema  = new Schema({
    firstName: String,
    email: String,
    phone: String, 
    language: String
})   

//Append friendSchema to Friend model
const Friend = mongoose.model("Friend", friendSchema)
module.exports = Friend;