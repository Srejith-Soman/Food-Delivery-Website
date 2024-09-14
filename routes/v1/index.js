import express from "express"
import userRouter from "./userRoutes.js"
import foodRouter from "./foodRoutes.js"

const v1Router = express.Router()

v1Router.use('/user' ,userRouter)
v1Router.use('/food',foodRouter)

export default v1Router;