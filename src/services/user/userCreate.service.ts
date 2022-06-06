import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities/cart.entity";
import { User } from "../../entities/user.entity";
import { IUser, IUserCreating } from "../../interfaces/user";

const userCreateService =async ({name, email, password, admin}:IUserCreating):Promise<IUser|null> => {
  const userRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart);
  
  const cart = cartRepository.create({
    paid: false,
    total: 0
  })
  await cartRepository.save(cart);

  const user = userRepository.create({
    email,
    name,
    password,
    admin,
    cart
  });
  await userRepository.save(user);

  const newUser = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", {email})
    .leftJoinAndSelect("user.cart", "cart")
    .getOne()
    
  return newUser
}

export default userCreateService;