import Joi from "joi";

// ✅ Common field validations
const nameSchema = Joi.string().min(3).max(60).required().messages({
  "string.empty": "Name cannot be empty.",
  "string.min": "Name must be at least 3 characters long.",
  "string.max": "Name must not exceed 60 characters.",
  "any.required": "Name is required."
});

const surnameSchema = Joi.string().min(3).max(60).required().messages({
  "string.empty": "Surname cannot be empty.",
  "string.min": "Surname must be at least 3 characters long.",
  "string.max": "Surname must not exceed 60 characters.",
  "any.required": "Surname is required."
});

const currentJobTitleSchema = Joi.string().min(3).max(60).required().messages({
  "string.empty": "Job Title cannot be empty.",
  "string.min": "Job Title must be at least 3 characters long.",
  "string.max": "Job Title must not exceed 60 characters.",
  "any.required": "Job Title is required."
});

const companyNameSchema = Joi.string().min(3).max(60).required().messages({
  "string.empty": "Company Name cannot be empty.",
  "string.min": "Company Name must be at least 3 characters long.",
  "string.max": "Company Name must not exceed 60 characters.",
  "any.required": "Company Name is required."
});

const descriptionSchema = Joi.string().min(5).max(600).required().messages({
  "string.empty": "Description cannot be empty.",
  "string.min": "Description must be at least 5 characters long.",
  "string.max": "Description must not exceed 600 characters.",
  "any.required": "Description is required."
});

const userIdSchema = Joi.string().required().messages({
  "string.empty": "User ID is required.",
  "any.required": "User ID is required."
});

// ✅ Main schema
const createProfileSchema = Joi.object({
  name: nameSchema,
  surname: surnameSchema,
  currentJobTitle: currentJobTitleSchema,
  companyName: companyNameSchema,
  description: descriptionSchema,
  userId: userIdSchema
});

export { createProfileSchema };
