import { HttpError } from "http-errors";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      message: err.message,
      status: err.status,
    });
    return;
  }

  console.log(err);

  res.status(500).json({
    message: "Something went wrong",
    status: 500,
  });
};
