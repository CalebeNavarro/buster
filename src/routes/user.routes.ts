import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import { authUser } from "../middlewares/authUser.middleware";
import { userLoginSchema, validateUserLogin } from "../middlewares/validateLogin.middleware";
import { userCreateSchema, validateUserCreate } from "../middlewares/validateUserCreate.middleware";

const routes = Router();

export function studentRoutes() {
  routes.post("/register", validateUserCreate(userCreateSchema), userCreateController);
  routes.post("/login", validateUserLogin(userLoginSchema),userLoginController)
  return routes;
}

