import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { addReviewCtrl, getReviewsCtrl } from "../controllers/reviews.js";
import { validateBody } from "../utils/validateBody.js";
import { reviewSchema } from "../validation/review.js";

const reviewsRouter = Router();

reviewsRouter .get("/", ctrlWrapper(getReviewsCtrl));
reviewsRouter .post("/", validateBody(reviewSchema), ctrlWrapper(addReviewCtrl));

export default reviewsRouter;