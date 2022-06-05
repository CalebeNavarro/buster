import { Request, Response } from "express";
import productStockUpdateService from "../../services/product/productStockUpdate.service";

const productStockUpdateController = async (req: Request, res: Response) => {
  const { quantity, price } = req.body;
  const { product_id } = req.params;

  const products = await productStockUpdateService({quantity, price, product_id});

  return res.status(200).send(products);
}

export default productStockUpdateController;