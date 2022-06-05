import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cart } from "./cart.entity";


@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({type: "varchar", width: 511})
  name: string;

  @Column({type: "varchar", width: 255, unique: true})
  email: string;

  @Column({type: "varchar", width: 511, select: false})
  password: string;

  @Column({type: "float", default: 0})
  money: number;

  @Column({type: "boolean", default: false})
  admin: boolean;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[]


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}