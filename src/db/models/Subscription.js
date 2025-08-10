import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
  },
  {
    versionKey: false,
  }
);

export const Subscription = model("subscription", subscriptionSchema);
