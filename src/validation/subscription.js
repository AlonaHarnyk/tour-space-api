import Joi from "joi";

export const subscriptionSchema = Joi.object({
  email: Joi.string().email().required(),
});
