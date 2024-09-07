import express from "express"
import { userSignup, userLogin, userLogout } from "../../controller/userControllers.js"

const userRouter = express.Router()


userRouter.post("/signup", userSignup)
userRouter.post("/login", userLogin)
userRouter.post("/logout", userLogout)

userRouter.get("/profile")
userRouter.put("/update")
userRouter.delete("/delete")


userRouter.get("/userList")
userRouter.get('/check-user')



export default userRouter;