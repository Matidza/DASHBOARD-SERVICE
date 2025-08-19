import express from "express";
import { 
    allMentorBookings, 
    bookSession, 
    individualBookPage, 
    menteeDashboard 
} from "../../controllers/menteeController/menteeController.js"
import authenticateToken from "../../middlewares/authenticateTokenFromAuthMicroservice.js";

import { profile } from "../../controllers/mentorController/mentorController.js";

const router = express.Router();

router.get("/dashboard", authenticateToken, menteeDashboard)
router.get("/individual-mentor-book-session-page", individualBookPage)
router.get("/all-mentor-bookings", allMentorBookings)
router.get("mentor-profile", profile) // import controller from mentorController

router.post("/book-session", bookSession) // bok a session with a mentor

export default router