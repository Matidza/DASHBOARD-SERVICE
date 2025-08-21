import mongoose from "mongoose";

const menteeProfileSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required!"],
            trim: true,        
        },
        surname:{
            type: String,
            required: [true, "Surname is required!"],
            trim: true,      
        },
        key_interview_skiils:[],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
            required: true,
        },
        profilePic: {

        },
        CV: {},
    }, { timestamps: true});

const MenteeProfileModel = mongoose.model("MenteeProfileModel", menteeProfileSchema);
export default MenteeProfileModel