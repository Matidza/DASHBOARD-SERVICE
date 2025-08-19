import express from "express";
import { createProfile, mentorDashboard, profile } from "../../controllers/mentorController/mentorController.js";
import authenticateToken from "../../middlewares/authenticateTokenFromAuthMicroservice.js";

const router = express.Router();

router.get("/dashboard", authenticateToken, mentorDashboard)
router.post("/create-profile", authenticateToken, createProfile)
router.get("/profile", profile)
export default router;