import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { Stock } from "../../entities/stock.entity";
import { IProduct, IProductCreating } from "../../interfaces/product";


const productCreateService =async ({name, description}:IProductCreating): Promise<IProduct> => {
  const stock = new Stock()
  stock.quantity = 0;
  stock.price = 0;
  await AppDataSource.manager.save(stock)

  const product = new Product()
  product.name = name;
  product.description = description;
  product.stock = stock;
  await AppDataSource.manager.save(product)


  return product;
}

export default productCreateService;