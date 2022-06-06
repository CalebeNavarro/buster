import { Request, Response } from "express";
import userListByEmail from "../../services/user/userListByEmail.service";

const userAuthController = async (req: Request, res: Response) => {
  const email = req.userEmail;  

  const user = await userListByEmail(email);
  
  return res.status(200).send(user);
}

export default userAuthController;