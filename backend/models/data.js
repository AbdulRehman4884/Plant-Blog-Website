const mongoose =require('mongoose')

const DataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    subject: String,
    message: String,
    Username:String,
    Password:String
})

const DataModel = mongoose.model("data",DataSchema)
module.exports = DataModel