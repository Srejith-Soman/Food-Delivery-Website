import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        default:"https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
    },
    category:{
        type:String,
        required:true
    }
})

const foodModel = mongoose.models.foodModel || mongoose.model("food",foodSchema)


export default foodModel;