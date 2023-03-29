const express = require("express")
const {connection} = require("./config/db")
const {userRouter} = require("./routes/user.route")
const PORT = 5050
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/user",userRouter)
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`App is running at port ${PORT}`)
})