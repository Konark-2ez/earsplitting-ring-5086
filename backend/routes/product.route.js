const express = require("express")
const proRouter = express.Router()
const {ProModel}= require("../model/product.model")



proRouter.post("/add",async(req,res)=>{
    try {
        const furn = new ProModel(req.body)
        furn.save()
        res.status(200).send({"msg":"Added furnitre Successfully"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})
proRouter.get("/",async(req,res)=>{
    try {
        const furn = await ProModel.find()
        res.status(200).send(furn)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

module.exports = {proRouter}