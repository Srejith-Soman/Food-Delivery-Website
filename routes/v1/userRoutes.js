import express from "express"
import { userSignup, userLogin, userLogout, userProfile, checkUser } from "../../controller/userControllers.js"
import userAuth from "../../middlewares/userAuth.js"

const userRouter = express.Router()


userRouter.post("/signup", userSignup)
userRouter.post("/login", userLogin)
userRouter.post("/logout", userLogout)

userRouter.get("/profile/:id",userAuth, userProfile)
userRouter.put("/update")
userRouter.delete("/delete")


userRouter.get("/userList")
userRouter.get('/check-user', userAuth,checkUser )



export default userRouter;