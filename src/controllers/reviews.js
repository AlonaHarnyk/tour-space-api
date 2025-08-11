import { sortOrders } from "../constants/index.js";
import { addReview, getReviews } from "../services/reviews.js";

export const getReviewsCtrl = async (req, res) => {
  const sortOrder = req.query.sortOrder;
  const page = isNaN(parseInt(req.query.page)) ? 1 : parseInt(req.query.page);
  const reviewsData = await getReviews(
    sortOrders.includes(sortOrder) ? sortOrder : "asc",
    page
  );

  res.json(reviewsData);
};

export const addReviewCtrl = async (req, res) => {
  await addReview(req.body);

  res.status(201).json({ message: "Review added" });
};
