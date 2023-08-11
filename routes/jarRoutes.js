import express from "express"
import { addJar, deleteJar, getJar, updateJar } from "../controllers/jarController.js"

const router = express.Router()

router
    .get("/", getJar)
    .post("/add", addJar)
    .put("/update/:id", updateJar)
    .delete("/delete/:id", deleteJar)

export default router