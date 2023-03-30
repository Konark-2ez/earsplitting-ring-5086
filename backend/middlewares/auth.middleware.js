const jwt = require("jsonwebtoken")
const auth = (req,res,next) =>{
    const token = req.headers.authorization.split(" ")[1]
    if(token){
        const decoded = jwt.verify(token,"furn")
        if(decoded){
            req.body.userID = decoded.userID
            next()
        }
        else{
            res.status(200).send({"msg":"You are not authorised"})
        }
    }
    else{
        res.status(200).send({"msg":"Please Login First"})
    }
}
module.exports = {auth}