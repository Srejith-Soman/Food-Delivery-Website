import express from "express"
import  connectDB from "./config/db.js"
import apiRouter from "./routes/index.js"
import cookieParser from "cookie-parser"
import handledError from "./utils/error.js"


const PORT = 4000
const  app = express()

//middleware
app.use(express.json())
app.use(cookieParser())


//DB Connection
connectDB();


app.get("/",(req,res)=> {
    res.send("API Working")
});

app.use("/api", apiRouter)

// Error handling
app.use(handledError)

app.all('*', (req,res)=> {
    res.status(404).json({  message: " end point dose not exist"})
})

app.listen(PORT,()=> {
    console.log(`Server working on http://localhost:${PORT}`)
});

 