import { cloudinaryInstance } from "../config/cloudinaryConfig.js"


const handleImageUpload = async (path)=> {
    try {
        
        const uploadResulr = await cloudinaryInstance.uploader.upload(path)
        return uploadResulr.url
        
    } catch (error) {
        next(error)
    }
}


export default handleImageUpload;