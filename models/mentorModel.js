import mongoose from "mongoose";

const mentorProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      trim: true,
    },
    surname: {
      type: String,
      required: [true, "Surname is required!"],
      trim: true,
    },
    currentJobTitle: {
      type: String,
      required: [true, "Job title is required!"],
      trim: true,
    },
    companyName: {
      type: String,
      required: [true, "Company name is required!"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required!"],
      trim: true,
    },
    tags: [String],
    rate: {
      type: Number, // e.g. hourly rate
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel", // reference to UserModel from Auth service
      required: true,
    },
    profilePic: {
      type: String, // URL or file path
      required: false,
    },
  },
  { timestamps: true }
);

const MentorProfileModel = mongoose.model(
  "MentorProfileModel",
  mentorProfileSchema
);

export default MentorProfileModel;
