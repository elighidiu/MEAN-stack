
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema that corresponds with Friend class
const friendSchema  = new Schema({
    _id: Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    email: String,
    phone: String, 
    language: String
})   

//Append friendSchema to Friend model
const Friend = mongoose.model("Friend", friendSchema)
module.exports = Friend;