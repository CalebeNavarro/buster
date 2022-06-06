import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/user";

const userCartService =async (email: string): Promise<IUser> => {
  const user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", {email})
    .leftJoinAndSelect("user.cart", "cart")
    .getOne()

  if (!user) {
    throw new AppError(400 ,"User not found");
  }

  return user;
}

export default userCartService;