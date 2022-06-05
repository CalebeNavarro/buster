import { Request, Response, NextFunction} from 'express';
import { IUserLogin } from '../interfaces/user';

import * as yup from "yup";
import { SchemaOf } from 'yup';

export const userLoginSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required().transform((_, originalValue) => originalValue.toLowerCase()),
  password: yup.string().required(),
})

export const validateUserLogin = (schema: SchemaOf<IUserLogin>) => {
  return async (
    req: Request, 
    res: Response, 
    next: NextFunction) => {
      try {
          try {
              next();
          } catch (err: any) {
              return res.status(400).json({
                  error: err.errors?.join(', ')
              });
          }

      } catch (err) {

          next(err);
      }
  }
}