import { Request, Response } from "express";
import productCreateService from "../../services/product/productCreate.service";

const productCreateController = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  const product = await productCreateService({name, description});

  return res.status(201).send(product);
}

export default productCreateController;