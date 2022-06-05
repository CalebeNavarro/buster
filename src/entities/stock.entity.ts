import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity()
export class Stock {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({type: "int"})
  quantity: number;

  @Column({type: "float"})
  price: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}