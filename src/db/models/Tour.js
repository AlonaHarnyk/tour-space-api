import { Schema, model } from "mongoose";

const tourSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startPrice: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const Tour = model("tour", tourSchema);
