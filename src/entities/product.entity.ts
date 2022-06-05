import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Stock } from "./stock.entity";


@Entity()
export class Product {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({type: "varchar"})
  name: string;

  @Column({type: "varchar"})
  description: string;

  @OneToOne(() => Stock)
  @JoinColumn()
  stock: Stock

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}