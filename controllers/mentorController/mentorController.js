import MentorProfileModel from "../../models/mentorModel.js";

export const mentorDashboard = async (request, response) => {
    response.send("<h2>hellow this is the mentor dashboard</h2>")
    console.log("hellow this is the mentor dashboard")
}
export default mentorDashboard;

export const createProfile = async (request, response) => {
    const { name, surname, currentJobTitle,
        companyName, description,
    } = request.body
    
    try {
        const newProfile = await MentorProfileModel.create({ name, surname, currentJobTitle,
        companyName, description, })
        //const result = await newProfile.save()

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