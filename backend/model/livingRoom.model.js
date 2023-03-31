const mongoose = require("mongoose")
const livSchema = mongoose.Schema({
  link:String,
  cost:Number,
  rating:Number,
  desciption:String,
  quantity:Number,
  userID:String

},{
    versionKey:false
})

const LivModel = mongoose.model("liv",livSchema)

module.exports = {LivModel}