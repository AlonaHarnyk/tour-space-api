import Joi from "joi";

export const questionSchema = Joi.object({
  tourName: Joi.string().required(),
  userName: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  question: Joi.string().required(),
});
