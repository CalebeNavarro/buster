import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const productDeleteService =async (product_id: string):Promise<void> => {
  const productDeleted = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Product)
    .where("id = :id", { id: product_id })
    .execute()

  if (!productDeleted.affected) {
    throw new AppError(404, "Product not found");
  }
}

export default productDeleteService;