const express = require("express")
const livRouter = express.Router()
const {LivModel}= require("../model/livingRoom.model")

const jwt = require("jsonwebtoken")

livRouter.post("/add",async(req,res)=>{
    try {
        const furn = new LivModel(req.body)
        furn.save()
        res.status(200).send({"msg":"Added furnitre Successfully"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

module.exports = {livRouter}