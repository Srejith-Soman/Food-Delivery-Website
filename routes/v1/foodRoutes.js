import express from "express";
import { addFood } from "../../controller/foodController.js";
import upload from "../../middlewares/multer.js";


const foodRouter = express.Router()


foodRouter.post('/add', upload.single('image'), addFood)




export default foodRouter;