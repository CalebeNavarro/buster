import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { IProduct } from "../../interfaces/product";

const productListService =async ():Promise<IProduct[]> => {
  const products = await AppDataSource
    .getRepository(Product)
    .createQueryBuilder("product")
    .leftJoinAndSelect("product.stock", "stock")
    .getMany()

  return products;
}

export default productListService;