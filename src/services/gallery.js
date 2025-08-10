import { Gallery } from "../db/models/Gallery.js";

export const getPictures = async (page) => {
  const limit = 4;
  const skip = (page - 1) * limit;
  const picturesCount = await Gallery.find().countDocuments();
  const pictures = await Gallery.find().skip(skip).limit(limit).exec();
  const totalPages = Math.ceil(picturesCount / limit);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = page > 1;
  return {
    pictures,
    totalPages,
    hasPreviousPage,
    hasNextPage,
    page,
  };
};
