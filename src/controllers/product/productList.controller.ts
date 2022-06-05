import { Request, Response } from "express";
import productListService from "../../services/product/productList.service";

const productListController = async (req: Request, res: Response) => {
  const products = await productListService();

  return res.status(201).send(products);
}

export default productListController;