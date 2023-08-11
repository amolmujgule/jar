import express from "express"
import { addOrder, deleteAllOrders, getAllOrders } from "../controllers/orderController.js"


const router = express.Router()

router
    .get("/", getAllOrders)
    .post("/add", addOrder)
    .delete("/delete", deleteAllOrders)

export default router