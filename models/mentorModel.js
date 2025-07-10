import mongoose from "mongoose";

const mentoShema = new mongoose.Schema({
    name:{},
    surname:{},
    currentJobTitle:{},
    companyName:{},
    description:{},
    key_interview_skiils:{},
    rate:{},
    userId: {}

}, { timestamps: true});

const MentorModel = mongoose.model("MentorModel", mentoShema);
export default MentorModel