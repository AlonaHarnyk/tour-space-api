import { Question } from "../db/models/Question.js";

export const askQuestion = (questionData) => Question.create(questionData);
