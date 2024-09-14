import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import upload from "../middlewares/multer.js";
import foodModel from "../models/foodModel.js";
import handleImageUpload from "../utils/imageUpload.js";


// Add Food Item

 export const addFood = async (req,res,next) => {
    try {
        const {name, description, price, image, category} = req.body;
        let  imageUrl;

        if(!name || !description || !price || !category){
           return res.status(400).json({ message: "all fields required"})
        }

        const isFoodExist = await foodModel.findOne({name})

        if(isFoodExist){
            return res.status(400).json({ success: false, message: "Food already existed"})
        }

        if(req.file){
           imageUrl = await handleImageUpload(req.file.path)
        }

        const newFood = new foodModel ({
            name,
            description,
            price,
            image: imageUrl,
            category
        })
        await newFood.save();
        
        res.status(201).json({success: true, message: " new food created successfully ", data: newFood})

    } catch (error) {
       next(error)
    }

}

