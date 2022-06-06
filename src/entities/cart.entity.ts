import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";
import { User } from "./user.entity";


@Entity()
export class Cart {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({type: "boolean"})
  paid: boolean;

  @Column({type: "float"})
  total: number;

  @ManyToMany(() => Product, {eager: true})
  @JoinTable()
  products: Product[]

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}