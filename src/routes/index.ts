import { Express } from 'express'
import productRoutes from './product.routes';
import { studentRoutes } from './user.routes';

    
export const appRoutes = (app: Express) => {
  app.use("/users", studentRoutes());
  app.use("/product", productRoutes());
}  