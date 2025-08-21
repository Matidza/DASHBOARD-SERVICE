import Joi from "joi";

// Common fields schemas
const nameSchema = Joi.string().min(3)
  .max(60)
  .required()
  .messages({
    'string.empty': 'Title cannot be empty.',
    'string.min': 'Title must be at least 3 characters long.',
    'string.max': 'Title must not exceed 60 characters.',
    'any.required': 'Title is required.'
  });

const surnameSchema = Joi.string().min(3)
  .max(60)
  .required()
  .messages({
    'string.empty': 'Title cannot be empty.',
    'string.min': 'Title must be at least 3 characters long.',
    'string.max': 'Title must not exceed 60 characters.',
    'any.required': 'Title is required.'
  });

const currentJobTitleSchema = Joi.string().min(3)
  .max(60)
  .required()
  .messages({
    'string.empty': 'Title cannot be empty.',
    'string.min': 'Title must be at least 3 characters long.',
    'string.max': 'Title must not exceed 60 characters.',
    'any.required': 'Title is required.'
  });


const companyNameSchema = Joi.string().min(3)
  .max(60)
  .required()
  .messages({
    'string.empty': 'Title cannot be empty.',
    'string.min': 'Title must be at least 3 characters long.',
    'string.max': 'Title must not exceed 60 characters.',
    'any.required': 'Title is required.'
  });


const descriptionSchema = Joi.string().min(5)
  .max(200000)
  .required()
  .messages({
    'string.empty': 'Description cannot be empty.',
    'string.min': 'Description must be at least 5 characters long.',
    'string.max': 'Description must not exceed 600 characters.',
    'any.required': 'Description is required.'
  });


const tagsSchema = Joi.string().min(3)
  .max(60)
  
  .messages({
    'string.empty': 'Title cannot be empty.',
    'string.min': 'Title must be at least 3 characters long.',
    'string.max': 'Title must not exceed 60 characters.',
    'any.required': 'Title is required.'
  });

const userIdSchema = Joi.string().required()
  .messages({
    'string.empty': 'User ID is required.',
    'any.required': 'User ID is required.'
  });

const createProfileSchema = Joi.object({
    name: nameSchema,
    surname: surnameSchema,
    currentJobTitle: currentJobTitleSchema,
    companyName: companyNameSchema,
    description: descriptionSchema,
    tags: tagsSchema,
    userId: userIdSchema
})

export {createProfileSchema};