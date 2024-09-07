import express from "express"
import  connectDB from "./config/db.js"
import apiRouter from "./routes/index.js"

//DB Connection
connectDB();

//app config
const  app = express()
const PORT = 4000

//middleware
app.use(express.json())



app.get("/",(req,res)=> {
    res.send("API Working")
})

app.use("/api", apiRouter)

app.listen(PORT,()=> {
    console.log(`Server working on http://localhost:${PORT}`)
})

 