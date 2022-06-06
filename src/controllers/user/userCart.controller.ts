import { Request, Response } from "express";
import userCartService from "../../services/user/userCart.service";


const userCartController = async (req: Request, res: Response) => {
  const email = req.userEmail;  

  const user = await userCartService(email);
  
  return res.status(200).send(user);
}

export default userCartController;