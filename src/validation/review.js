import Joi from "joi";

export const reviewSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
  userName: Joi.string().min(1).max(100).required(),
  tourCountry: Joi.string().min(1).max(100).required(),
  review: Joi.string().min(10).max(300).required(),
});
