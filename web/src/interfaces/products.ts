export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  created_at: string;
}

export interface ProductSchema {
  name: string;
  description: string;
  price: string;
}
