import createHttpError from "http-errors";
import { getTourById, getTours } from "../services/tours.js";

export const getToursCtrl = async (req, res) => {
  const tours = await getTours();

  res.json({ tours });
};

export const getTourByIdCtrl = async (req, res) => {
  const tour = await getTourById(req.params.id);

  if(!tour) {
    throw createHttpError(404, "Tour not found");
  }

  res.json({ tour });
};
