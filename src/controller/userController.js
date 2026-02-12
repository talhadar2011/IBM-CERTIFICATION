import userModel from "../models/userModel.js";

exports.createUser = async (res, req) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findone({ email })
        if (user) {
            res.status(400).json({ message: "User with this email already exisit." })
        }
        else
        {
            
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}