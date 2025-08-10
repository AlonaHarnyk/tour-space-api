import Joi from "joi";

export const reviewSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
  userName: Joi.string().required(),
  tourCountry: Joi.string().required(),
  review: Joi.string().required(),
});