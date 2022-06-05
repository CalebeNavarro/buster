import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities/cart.entity";
import { User } from "../../entities/user.entity";
import { ICart } from "../../interfaces/user";

const cartCreateService =async (user_email:string): Promise<ICart> => {
  const user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", { email: user_email })
    .getOne()

  const cartRepository = AppDataSource.getRepository(Cart);
  
}

export default cartCreateService;