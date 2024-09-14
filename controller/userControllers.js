import User from "../models/userModels.js";
import bcrypt from "bcrypt"
import genarateToken from "../utils/token.js";

// User Signup

export  const userSignup = async(req,res,next)=> {
    try {
        const { name, email, password, phone } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({ success: false, message: "all fields required" });
            console.log(name,email,password)
        }
       const isUserExist = await User.findOne({ email });

       if(isUserExist){
       return res.status(400).json({ message:"user already  exist" })
       }

       const saltRounds = 10;
       const hashPassword = await bcrypt.hash(password, saltRounds);

       const newUser = new User({
        name,
        email,
        password:hashPassword,
        phone,
       });

       await newUser.save();

       const token  = genarateToken(newUser._id)

       res.cookie('token', token)
       res.json({ success:true, message:"user created  successfully" })


        
    } catch (error) {
        next(error)
        
    }
}


// User Login

export const userLogin = async(req,res,next)=> {
    try {

        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'all fields are required' })
        }

        const userExist  = await User.findOne({ email })
        if(!userExist){
            return res.status(404).json({ success: false, message: "user dose not exist" })
        }

        const matchPassword = await bcrypt.compareSync(password, userExist.password)
        if (!matchPassword) {
            return res.status(401).json({ message :"Password is not correct" });
          }

          const token  = genarateToken(userExist._id)

          res.cookie('token', token)
          res.json({ success:true, message:"User Login Successfully" })

    } catch (error) {
        next(error)
    }
}


// User Logout

export const userLogout = async(req,res,next)=> {
    try {

        res.clearCookie("token");
        res.json({ success: true, message: " User Logout Successfully "})


    } catch (error) {
        next(error)
        
    }
}


// User Profile

export const userProfile = async(req,res,next)=> {
    try {

        const user  =  req.user; 
        const userData = await User.findOne({ _id: user.id })

        res.json({ success: true, message: " User Data Fetched ", data: userData})

    } catch (error) {
        next(error)
        
    }
}


// User Check

export const checkUser = async(req,res,next)=> {
    try {

        const { user } = req;
        if(!user){
            res.status(401).json({success:false, message: "user not autherized" })
        }

        res.json({ success: true, message: " User Autherized "})

    } catch (error) {
        next(error)
        
    }
}
