import { Tour } from "../db/models/Tour.js";

export const getTours = () => Tour.find({}, { description: 0 });

export const getTourById = (id) => Tour.findById(id);
