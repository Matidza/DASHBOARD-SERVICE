import { createProfileSchema } from "../../middlewares/mentorValidator.js";
import MentorProfileModel from "../../models/mentorModel.js";

export const mentorDashboard = async (request, response) => {
    response.send("<h2>hellow this is the mentor dashboard</h2>")
    console.log("hellow this is the mentor dashboard")
}
export default mentorDashboard;

export const createProfile = async (request, response) => {
    const { name, surname, currentJobTitle,companyName, description,} = request.body
    // Logged In user
    const {userId} = request.user
    try {
        const { value, error} = createProfileSchema.validate({
            name, surname,
            currentJobTitle,companyName, 
            description, userId
        })
        if (error) {
            return response.status(400).json({
                success: false,
                message: error.details[0].message
            })
        }
        // check if userId has created a profile already
        // create the profile
        const newProfile = await MentorProfileModel.create({ 
            userId, name, surname,
            currentJobTitle,companyName, 
            description
        })
       console.log(userId)
        return response.status(201).
            json({
                success: true,
                field: null,
                message: "Profile created successfully.",
                result: newProfile
            })
        
    } catch (error) {
        console.log(error)
        console.log("Error has occured")
        return response.status(500).
            json({
                success: false,
                message: "Internal server error, try again"
            })
    }
}

export const profile = (request, response) => {
    
}