import asyncHandler from "express-async-handler";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import user from "../modal/user.js";

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const isFound = await user.findOne({ email })
    if (!isFound) {
        return res.status(401).json({
            message: "Invalid Credentials email"
        })
    }
    const isValid = await bcrypt.compare(password, isFound.password)
    if (!isValid) {
        return res.status(401).json({
            message: "Invalid Credentials password"
        })
    }
    const token = jwt.sign({ userId: isFound._id }, process.env.JWT_KEY)
    res.cookie("authtoken", token, {
        httpOnly: true,
        // maxAge: "",
        // secure:true,
    })
    res.json({
        message: "Login Success",
        result: {
            name: isFound.name,
            id: isFound._id,
        }
    })
})