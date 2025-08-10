import { askQuestion } from "../services/questions.js";

export const askQuestionCtrl = async (req, res) => {
  await askQuestion(req.body);

  res.status(201).json({ message: "Question received" });
};
