export interface IProductCreating {
  name: string;
  description: string;
}


export interface IProductStockUpdate {
  product_id: string;
  quantity?: number;
  price?: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  stock: IStock
}

export interface IStock {
  id: string;
  quantity: number;
  price: number;
}