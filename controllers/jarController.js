import asynchandler from "express-async-handler"
import jar from "../modal/jar.js"


export const getJar = asynchandler(async (req, res) => {
    const result = await jar.find()
    res.json({
        message: "jar Fetch Success", result
    })
})
export const addJar = asynchandler(async (req, res) => {
    console.log(req.body)
    const result = await jar.create(req.body)
    res.json({
        message: "jar added Success"
    })
})
export const updateJar = asynchandler(async (req, res) => {
    // console.log(req.params);
    const { id } = req.params
    const result = await jar.findByIdAndUpdate(id, req.body)
    res.json({
        message: "jar update Success"
    })
})
export const deleteJar = asynchandler(async (req, res) => {
    const { id } = req.params
    await jar.findByIdAndDelete(id, req.body)
    res.json({
        message: "jar delete Success"
    })
})

