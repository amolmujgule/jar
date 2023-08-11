import express from "express"
import { userAdd, userDelete, userget, userupdate } from "../controllers/userController.js"

const router = express.Router()

router
    .get("/", userget)
    .post("/register", userAdd)
    .put("/:id", userupdate)
    .delete("/:id", userDelete)

export default router