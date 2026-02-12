import userModel from "../models/userModel.js";

exports.createUser= async(res,req)=>{
    try{
        const{name,email,password}=req.body;
        const user=await User
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}