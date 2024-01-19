import { ApiError } from "./ApiError";
import { CustomError } from "@src/types";
import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode;
    const message = error.message || "Something went wrong";
    error = new ApiError(statusCode, message, err.stack);
  }
  const response = {
    ...error,
    ...(process.env.NODE_ENV == "dev" ? { stack: error.stack } : {}),
  };
  return res.status(error.statusCode).json(response);
};
export { errorHandler };
