import { sortOrders } from "../constants/index.js";
import { addReview, getReviews } from "../services/reviews.js";

export const getReviewsCtrl = async (req, res) => {
  const sortOrder = req.query.sortOrder;
  const reviews = await getReviews(
    sortOrders.includes(sortOrder) ? sortOrder : "asc"
  );

  res.json({ reviews });
};

export const addReviewCtrl = async (req, res) => {
  await addReview(req.body);

  res.status(201).json({ message: "Review added" });
};
