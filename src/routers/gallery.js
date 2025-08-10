import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getPicturesCtrl } from "../controllers/gallery.js";

const galleryRouter = Router();

galleryRouter.get("/", ctrlWrapper(getPicturesCtrl));

export default galleryRouter;
