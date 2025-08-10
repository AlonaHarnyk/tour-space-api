import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { isValidId } from "../middlewares/isValidId.js";
import { getToursCtrl, getTourByIdCtrl } from "../controllers/tours.js";

const toursRouter = Router();

toursRouter.get("/", ctrlWrapper(getToursCtrl));
toursRouter.get("/:id", isValidId, ctrlWrapper(getTourByIdCtrl));

export default toursRouter;
