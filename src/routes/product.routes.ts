import { Router } from "express";
import productCreateController from "../controllers/product/productCreate.controller";
import productListController from "../controllers/product/productList.controller";
import productStockUpdateController from "../controllers/product/productStockUpdate.controller";
import { adminUser } from "../middlewares/adminUser.middleware";


const routes = Router();

const productRoutes = () => {
  routes.post("/register", adminUser ,productCreateController)
  
  routes.patch("/stock/:product_id", adminUser, productStockUpdateController)

  routes.get("/", productListController);
  return routes;
}

export default productRoutes;