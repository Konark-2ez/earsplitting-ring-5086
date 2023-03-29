const express = require("express")
const {UserModel}= require("../model/user.model")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const userRouter = express.Router()
userRouter.post("/register",async(req,res)=>{
    const {name,email,password} = req.body
    try {
        if(!name || !email || !password){
            res.status(400).send({"msg":"Enter all required fields"})
        }
        else{
            bcrypt.hash(password, 5,async(err, hash) =>{
                // Store hash in your password DB.
                const user = new UserModel({name,email,password:hash})
                await user.save()
                res.status(200).send({"msg":"User is registered"})
            });
 

        }
      
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
      const user =  await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, (err, result)=> {
                if(result){
                    res.status(200).send({"msg":"Login is succesful","token":jwt.sign({"userID":user._id},"furn")})
                }
                else{
                    res.status(400).send({"msg":"Wrong Password"})
                }
                
            });
        }
        else{
            res.status(400).send({"msg":"user not found"})
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

module.exports = {userRouter}