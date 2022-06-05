import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserCreating } from "../../interfaces/user";

const userCreateService =async ({name, email, password, admin}:IUserCreating):Promise<IUser | null> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({
    email,
    name,
    password,
    admin
  });
  await userRepository.save(user);

  const newUser = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", {email})
    .getOne()
    
  return newUser
}

export default userCreateService;