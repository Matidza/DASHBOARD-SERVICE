import express from "express";
import { createMentorProfile, mentorDashboard, profile } from "../../controllers/mentorController/mentorController.js";
import authenticateToken from "../../middlewares/authenticateTokenFromAuthMicroservice.js";

const router = express.Router();

router.get("/dashboard", authenticateToken, mentorDashboard)
router.post("/create-profile", authenticateToken, createMentorProfile)
router.get("/profile", profile)
export default router;