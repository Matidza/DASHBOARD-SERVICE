import mongoose from "mongoose";

const mentorProfileShema = new mongoose.Schema(
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
        currentJobTitle:{
            type: String,
            required: [true, "Job title is required!"],
            trim: true,
        },
        companyName:{
            type: String,
            required: [true, "Company name is required!"],
            trim: true,
        },
        description:{
            type: String,
            required: [true, "Description is required!"],
            trim: true,
        },
        tags:[],
        rate:{},
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
            //required: true,
        },
        profilePic: {
        },

    }, { timestamps: true });

const MentorProfileModel = mongoose.model("MentorProfileModel", mentorProfileShema);
export default MentorProfileModel