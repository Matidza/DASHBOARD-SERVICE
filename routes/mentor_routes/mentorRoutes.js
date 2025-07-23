import express from "express";
import { createProfile, mentorDashboard } from "../../controllers/mentorController/mentorController.js";


const router = express.Router();

router.get("/dashboard", mentorDashboard)
router.post("/create-profile", createProfile)

export default router;