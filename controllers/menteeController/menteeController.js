import MentorProfileModel from "../../models/mentorModel.js";

export const menteeDashboard = async (request, response) => {
    const { page } = request.query
    const sessionPerPage = 10;
    try {
        let pagenumber = 0;
        if ( page <= 1) {
            pagenumber = 0
        } else {
            pagenumber = page -1
        }

        const allProfile = await MentorProfileModel.find()
            .sort({createdAt: -1})
            .skip(pagenumber * sessionPerPage)
            .limit(sessionPerPage)
            // .populate({}) 
            
        return response.status(200).
            json({
                success: true,
                field: null,
                message: "here's a list of Professionals that can help you prep for an interview.",
                result: allProfile
            })
    } catch (error){
        return response.status(500).
            json({
                success: false,
                message: "Internal server error, try again"
            })
    }
}
export default menteeDashboard;