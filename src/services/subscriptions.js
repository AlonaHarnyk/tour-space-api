import { Subscription } from "../db/models/Subscription.js";

export const findEmail = (email) => Subscription.findOne({ email });

export const subscribe = (emailData) => Subscription.create(emailData);
