const express = require("express")
const livRouter = express.Router()
const {LivModel}= require("../model/livingRoom.model")

const jwt = require("jsonwebtoken")

livRouter.post("/add",async(req,res)=>{
    try {
        const furn = new LivModel(req.body)
        await furn.save()
        res.status(200).send({"msg":"Added furnitre Successfully"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})
livRouter.get("/",async(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    const  decoded = jwt.verify(token,"furn")
    try {
        if(decoded){
            console.log(decoded)
            const furn = await LivModel.find({"userID":decoded.userID})
            res.status(200).send(furn)
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

livRouter.patch("/update/:itemID",async(req,res)=>{
    //logic
    const payload = req.body
    const token=req.headers.authorization.split(" ")[1]
    const decoded=jwt.verify(token,"furn")
    const itemID = req.params.itemID
    const req_id = decoded.userID //The person who is making the delete request
    const furn = LivModel.findOne({_id:itemID})
    const userID_in_note = furn.userID

    console.log(itemID)
    try {
        await LivModel.findByIdAndUpdate({_id:itemID},payload)
        
        res.status(200).send({"msg":"Note has been updated"})
    } catch (error) {
       res.status(400).send({"msg":error.message}) 
    }
})

livRouter.delete("/delete/:itemID",async(req,res)=>{
    //logic
    
    const token=req.headers.authorization.split(" ")[1]
    const decoded=jwt.verify(token,"furn")
    const itemID = req.params.itemID
    const req_id = decoded.userID //The person who is making the delete request
    console.log(req_id)
    const furn =await  LivModel.findOne({_id:itemID})
    const userID_in_note = furn.userID

  
    try {
        if(req_id === userID_in_note){
            await LivModel.findByIdAndDelete({_id:itemID})
            res.status(200).send({"msg":"Item has been deleted"})
        }
        else{
            res.status(200).send({"msg":"Not Authorised"})
        }
       
        
        
    } catch (error) {
       res.status(400).send({"msg":error.message}) 
    }
})
module.exports = {livRouter}