import { Request, Response } from "express";
import productDeleteService from "../../services/product/productDelete.service";

const productDeleteController = async (req: Request, res: Response) => {
  const { product_id } = req.params;

  await productDeleteService(product_id);

  return res.status(204).send();
}

export default productDeleteController;