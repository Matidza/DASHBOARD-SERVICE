import express from "express";
import { menteeDashboard } from "../../controllers/menteeController/menteeController.js"

const router = express.Router();

router.get("/dashboard", menteeDashboard)

export default router