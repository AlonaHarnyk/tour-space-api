import { Schema, model } from "mongoose";

const questionSchema = new Schema(
  {
    tourName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const Question = model("question", questionSchema);
