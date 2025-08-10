import { Schema, model } from "mongoose";

const gallerySchema = new Schema(
  {
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

export const Gallery = model("gallery", gallerySchema);
