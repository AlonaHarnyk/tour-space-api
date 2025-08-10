import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    tourCountry: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Review = model("review", reviewSchema);
