const express = require("express")
const {connection} = require("./config/db")
const {userRouter} = require("./routes/user.route")
const {proRouter} = require("./routes/product.route")
const {auth} = require("./middlewares/auth.middleware")
const {livRouter} = require("./routes/livingroom.route")
const PORT = 5050
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Home Page")
})
//For Product page
app.use("/product",proRouter)
//For user 
app.use("/user",userRouter)
//middleware
app.use(auth)
//for cart
app.use("/furnitre",livRouter)

app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`App is running at port ${PORT}`)
})