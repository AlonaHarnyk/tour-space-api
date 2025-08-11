import { Review } from "../db/models/Review.js";

export const getReviews = async (sortOrder, page) => {
  const limit = 8;
  const skip = (page - 1) * limit;
  const reviewsCount = await Review.find().countDocuments();
  const reviews = await Review.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: sortOrder })
    .exec();
  const totalPages = Math.ceil(reviewsCount / limit);
  const hasNextPage = Boolean(totalPages - page);
  console.log(reviews);
  return {
    reviews,
    totalPages,
    hasNextPage,
    page,
  };
};

export const addReview = (reviewData) => Review.create(reviewData);
