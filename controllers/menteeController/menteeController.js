import MentorProfileModel from "../../models/mentorModel.js";


export const menteeDashboard = async (request, response) => {
  const { page } = request.query;
  const sessionPerPage = 10;

  try {
    const pagenumber = Math.max(Number(page || 1) - 1, 0);

    const allProfiles = await MentorProfileModel.find()
      .sort({ createdAt: -1 })
      .skip(pagenumber * sessionPerPage)
      .limit(sessionPerPage)
      // .populate({})

    return response.status(200).json({
      success: true,
      field: null,
      message:
        "Here's a list of Professionals that can help you prep for an interview.",
      result: allProfiles,
    });
  } catch (error) {
    console.error("Error in menteeDashboard:", error);
    return response.status(500).json({
      success: false,
      message: "Internal server error, try again",
    });
  }
};



export const individualBookPage = (request, response) => {
    // 
}

export const allMentorBookings = (request, response) => {
    // caching
    //pagination
    // N + 1 rule
}

export const bookSession = (request, response) => {
    
}