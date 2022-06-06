import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";
import jwt from "jsonwebtoken";
import userListByEmail from "../../services/user/userListByEmail.service";

const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password, admin } = req.newUser;

  const token = req.headers.authorization?.split(" ")[1]
  
  if (admin) {
    try {
      let emailAdmin: string = "";
      jwt.verify(token as string, process.env.JWT_SECRET as string,async (err: any, decoded: any) => {
        emailAdmin = decoded?.email;
      })
      const user =await userListByEmail(emailAdmin);

      if (user.admin) {
        const newUser = await userCreateService({name, email, password, admin});
        return res.status(201).send(newUser);
      } else {
      return res.status(400).send({"message": "Invalind Token!"})
      }

    } catch (error) {
      console.log(error)
      return res.status(400).send({"message": "Email already exist!"})
    }
  }

  const newUser = await userCreateService({name, email, password, admin});

  
  return res.status(201).send(newUser);
}

export default userCreateController;