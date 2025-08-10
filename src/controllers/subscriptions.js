import createHttpError from "http-errors";
import { findEmail, subscribe } from "../services/subscriptions.js";

export const subscribeCtrl = async (req, res) => {
  const email = await findEmail(req.body.email);

  if (email) {
    throw createHttpError(
      409,
      "Such email is already added to subscribers list"
    );
  }

  await subscribe(req.body);

  res.status(201).json({ message: "Subscription successful" });
};
