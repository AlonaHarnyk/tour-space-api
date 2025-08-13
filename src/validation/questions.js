import Joi from "joi";

export const questionSchema = Joi.object({
  tourName: Joi.string().required(),
  userName: Joi.string().min(1).max(100).required(),
  phoneNumber: Joi.string().required(),
  question: Joi.string().min(10).max(300).required(),
});
