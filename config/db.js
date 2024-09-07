import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()



const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected")
    } catch (error) {
        console.error("Error connecting to MongoDB",error);
        res.status(500).json(error)
        
    }
};


export default connectDB;




