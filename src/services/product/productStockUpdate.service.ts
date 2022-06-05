import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { Stock } from "../../entities/stock.entity";
import { AppError } from "../../errors/appError";
import { IProductStockUpdate, IStock } from "../../interfaces/product";


const productStockUpdateService =async ({quantity, price, product_id}: IProductStockUpdate): Promise<IStock> => {
  const product = await AppDataSource
    .getRepository(Product)
    .createQueryBuilder("product")
    .where("product.id = :id", { id: product_id })
    .leftJoinAndSelect("product.stock", "stock")
    .getOne()

  if (!product) {
    throw new AppError(400, "Product not found!");
  }

  const stock = await AppDataSource
    .createQueryBuilder()
    .update(Stock)
    .set({quantity, price})
    .where("id = :id", { id: product?.stock.id })
    .returning("id, quantity, price")
    .execute()


  return stock.raw[0]
}

export default productStockUpdateService;