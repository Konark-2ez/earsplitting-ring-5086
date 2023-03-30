const mongoose = require("mongoose")
const proSchema = mongoose.Schema({
  link:String,
  cost:Number,
  rating:Number,
  desciption:String


},{
    versionKey:false
})

const ProModel = mongoose.model("product",proSchema)

module.exports = {ProModel}