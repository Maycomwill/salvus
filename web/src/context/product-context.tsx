import { Product } from "@/interfaces/products";
import api from "@/lib/axios";
import { AxiosError } from "axios";
import { createContext, ReactNode, useState } from "react";

export interface ProductContextProps {
  searchAllProducts: () => void;
  products: Product[];
  isLoading: boolean;
}
export const ProductContext = createContext({} as ProductContextProps);

export function ProductionContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function searchAllProducts() {
    try {
      setIsLoading(true);
      const { data } = await api.get("/products");
      console.log(data.data);
      setProducts(data.data);
      // return setTimeout(() => setIsLoading(false), 2000);
      return setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        return { message: error.message, data: error };
      }
    }
  }

  return (
    <ProductContext.Provider value={{ products, isLoading, searchAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
