import { Request, Response, NextFunction} from 'express';
import { IUserCreating } from '../interfaces/user';

import * as yup from "yup";
import { SchemaOf } from 'yup';
import bcrypt from "bcrypt";

export const userCreateSchema: SchemaOf<IUserCreating> = yup.object().shape({
  name: yup.string().required().transform((_, originValue) => originValue.toLowerCase()),
  email: yup.string().email().required().transform((_, originalValue) => originalValue.toLowerCase()),
  password: yup.string().required().transform((_, originalValue) => bcrypt.hashSync(originalValue, 10)),
  admin: yup.boolean().required().default(false)
})

export const validateUserCreate = (schema: SchemaOf<IUserCreating>) => {
  return async (
    req: Request, 
    res: Response, 
    next: NextFunction) => {
      try {
          
          const data = req.body;

          try {
            const validatedData = await schema.validate(
                data, 
                { 
                    abortEarly: false,
                    stripUnknown: true
                })
              req.newUser = validatedData;
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