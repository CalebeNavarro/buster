import { Request, Response } from "express";
import cartCreateService from "../../services/cart/cartCreate.service";

const cartCreateController = async (req: Request, res: Response) => {
  const user_email = req.userEmail;
  
  const cart = await cartCreateService(user_email);

  return res.status(201).send(cart);
}

export default cartCreateController;