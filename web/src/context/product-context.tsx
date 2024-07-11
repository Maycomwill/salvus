import { Product, ProductCreateSchema } from "@/interfaces/products";
import api from "@/lib/axios";
import { AxiosError } from "axios";
import { createContext, ReactNode, useState } from "react";
import { toast } from "sonner";

export interface ProductContextProps {
  searchAllProducts: () => void;
  createNewProduct: (data: ProductCreateSchema) => void;
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

  async function createNewProduct(formData: ProductCreateSchema) {
    const price = Number(formData.price);
    console.log(formData);
    try {
      setIsLoading(true);
      const { data } = await api.post("/products", {
        name: formData.name,
        description: formData.description,
        price,
      });
      setIsLoading(false);
      return toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        return toast.error(error.message);
      }
    }
  }

  return (
    <ProductContext.Provider
      value={{ products, isLoading, searchAllProducts, createNewProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
