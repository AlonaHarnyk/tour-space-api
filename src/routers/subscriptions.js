import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { subscribeCtrl } from "../controllers/subscriptions.js";
import { subscriptionSchema } from "../validation/subscription.js";

const subscriptionsRouter = Router();

subscriptionsRouter.post(
  "/",
  validateBody(subscriptionSchema),
  ctrlWrapper(subscribeCtrl)
);

export default subscriptionsRouter;
