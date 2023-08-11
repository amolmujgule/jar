import Order from "./../modal/Orders.js"
import asyncHandler from "express-async-handler"

export const addOrder = asyncHandler(async (req, res) => {
    await Order.create(req.body)
    res.json({ message: "Order Create Success" })
})
export const getAllOrders = asyncHandler(async (req, res) => {

    const result = await Order.find().populate("customer")
    res.json({ message: "Order Fetch Success", result })
})
export const deleteAllOrders = asyncHandler(async (req, res) => {
    const {id} = req.params
    const result = await Order.deleteMany()
    res.json({ message: "Order delete Success", result })
})