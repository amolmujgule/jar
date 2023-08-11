import asynchandler from "express-async-handler"
import bcrypt from "bcrypt";
import user from "../modal/user.js";
export const userget = asynchandler(async (req, res) => {
    const result = await user.find({ role: "customer" })
    res.json({
        message: "user Fetch Success", result
    })
})
export const userAdd = asynchandler(async (req, res) => {
    const { password, name } = req.body
    const hashPass = await bcrypt.hash(password || name, 10)
    const result = await user.create({
        ...req.body,
        password: hashPass,
        role: "customer"
    })
    res.json({
        message: "user added Success"
    })
})
export const userupdate = asynchandler(async (req, res) => {
    const { id } = req.params
    const result = await user.findByIdAndUpdate(id, req.body)
    res.json({
        message: "user update Success"
    })
})
export const userDelete = asynchandler(async (req, res) => {
    const { id } = req.params
    await user.findByIdAndDelete(id, req.body)
    res.json({
        message: "user delete Success"
    })
})