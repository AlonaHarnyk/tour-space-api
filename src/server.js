import express from "express";
import cors from "cors";

import { env } from "./utils/env.js";
import { swaggerDocs } from "./middlewares/swaggerDocs.js";

import { errorHandler } from "./middlewares/errorHandler.js";

import toursRouter from "./routers/tours.js";
import questionsRouter from "./routers/questions.js";
import reviewsRouter from "./routers/reviews.js";
import subscriptionsRouter from "./routers/subscriptions.js";
import galleryRouter from "./routers/gallery.js";

const PORT = Number(env("PORT", "3000"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use("/tours", toursRouter);
  app.use("/ask", questionsRouter);
  app.use("/reviews", reviewsRouter);
  app.use("/subscribe", subscriptionsRouter);
  app.use("/gallery", galleryRouter);

  app.use("/api-docs", swaggerDocs());

  app.use("*", (req, res) => {
    res.status(404).json({
      message: "Route not found",
    });
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
