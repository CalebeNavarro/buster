import { IProduct } from "./product";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  money: number;
  admin: boolean;
  cart: ICart
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserCreating {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}


export interface ICart {
  id: string;
  paid: boolean;
  total: number;
  products: IProduct[]
}


