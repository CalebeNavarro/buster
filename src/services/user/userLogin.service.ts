import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/user";


const userLoginService = async ({email, password}: IUserLogin): Promise<string> => {
  const account = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", {email})
    .addSelect("user.password")
    .getOne()
    
  
  if (!account || !bcrypt.compareSync(password, account.password)) {
    throw new AppError(401, "Wrong email/password");
  }
  
  const token = jwt.sign(
    {email: email, admin: account.admin},
    process.env.JWT_SECRET as string,
    {expiresIn: '1d'}
  )
  return token;
}


export default userLoginService;