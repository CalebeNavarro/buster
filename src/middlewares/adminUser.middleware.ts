import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken"
import { AppError } from "../errors/appError";

export const adminUser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1]

      jwt.verify(token as string, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
        if (!decoded.admin) {
          throw new AppError(401, "Unauthorized access")
        }
        next()
      })

    } catch (error) {
      return res.status(401).json({message: "Invalid Token"});
    }
}