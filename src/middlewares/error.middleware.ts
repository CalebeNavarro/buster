import { Request, Response, NextFunction } from 'express' 
import { QueryFailedError } from 'typeorm';
import { AppError } from '../errors/appError';
import { DatabaseError } from 'pg-protocol';
import "express-async-errors";


export const errorMiddleware = (err: any, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      code: err.statusCode,
      message: err.message,
    });
  }

  if (err instanceof QueryFailedError) {
    const error = err.driverError as DatabaseError;

    if (error.code === "23505") {
      return response.status(409).json({
        status: "error",
        code: 409,
        message: "Email already exist",
      });
    } else if (error.code === "22P02") {
      return response.status(400).json({
        status: "error",
        code: 400,
        message: "Invalid product_id",
      });
    }
  }
  console.error("error", err)
  return response.status(500).json({
    status: "error",
    code: 500,
    message: "Internal server error",
  });
}
     