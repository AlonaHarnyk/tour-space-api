import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { questionSchema } from "../validation/questions.js";
import { askQuestionCtrl } from "../controllers/questions.js";

const questionsRouter = Router();

questionsRouter.post(
  "/",
  validateBody(questionSchema),
  ctrlWrapper(askQuestionCtrl)
);

export default questionsRouter;
