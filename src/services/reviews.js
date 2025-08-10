import { Review } from "../db/models/Review.js";

export const getReviews = (sortOrder) =>
  Review.find().sort({ createdAt: sortOrder });

export const addReview = (reviewData) => Review.create(reviewData);
