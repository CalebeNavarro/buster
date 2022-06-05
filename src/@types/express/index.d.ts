import * as express from 'express'
import { IUserCreating } from "../../interfaces/user";

declare global {
    namespace Express {
      interface Request {
        userEmail: string,
        newUser: Record<string,any>
      }
    }
}