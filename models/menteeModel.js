import mongoose from "mongoose";

const menteeSchema = new mongoose.Schema({
    name:{},
    surname:{},
    currentJobTitle:{},
    companyName:{},
    description:{},
    key_interview_skiils:{},
    userId: {}

}, { timestamps: true});

const MenteeModel = mongoose.model("MenteeModel", menteeSchema);
export default MenteeModel