import { createProfileSchema } from "../../middlewares/mentorValidator.js";
import MentorProfileModel from "../../models/mentorModel.js";

export const mentorDashboard = async (request, response) => {
    response.send("<h2>hellow this is the mentor dashboard</h2>")
    console.log("hellow this is the mentor dashboard")
}
export default mentorDashboard;



// ✅ Create Mentor Profile
export const createMentorProfile = async (request, response) => {
    const { name, surname, currentJobTitle, companyName, description } = request.body;
    const { userId, user_type } = request.user; // ✅ Comes from JWT payload

    try {
        // 1. Check if user is a mentor
        if (user_type !== "mentor") {
            return response.status(403).json({
                success: false,
                message: "Only mentors are allowed to create a profile."
            });
        }

        // 2. Check if mentor already has a profile
        const existingProfile = await MentorProfileModel.findOne({ userId });
        if (existingProfile) {
            return response.status(400).json({
                success: false,
                message: "You already have a profile. You can only create one."
            });
        }

        // 3. Validate fields
        const { error } = createProfileSchema.validate({
            name,
            surname,
            currentJobTitle,
            companyName,
            description,
            userId
        });

        if (error) {
            return response.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        // 4. Create profile
        const newProfile = await MentorProfileModel.create({
            userId,
            name,
            surname,
            currentJobTitle,
            companyName,
            description
        });

        return response.status(201).json({
            success: true,
            message: "Profile created successfully.",
            result: newProfile
        });

    } catch (error) {
        console.error("Error creating profile:", error);
        return response.status(500).json({
            success: false,
            message: "Internal server error, please try again."
        });
    }
};


export const profile = (request, response) => {
    
}