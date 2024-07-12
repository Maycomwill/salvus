import { Product, ProductSchema } from "@/interfaces/products";
import api from "@/lib/axios";
import { AxiosError } from "axios";
import { createContext, ReactNode, useState } from "react";
import { toast } from "sonner";

export interface ProductContextProps {
  searchAllProducts: () => void;
  createNewProduct: (data: ProductSchema) => void;
  updateProduct: (data: Product) => void;
  deleteProduct: (id: string) => void;
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

  async function createNewProduct(formData: ProductSchema) {
    const price = Number(formData.price);
    try {
      setIsLoading(true);
      const { data } = await api.post("/products", {
        name: formData.name,
        description: formData.description,
        price,
      });
      searchAllProducts();
      setIsLoading(false);
      return toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        return toast.error(error.message);
      }
    }
  }

  async function updateProduct(formData: Product) {
    try {
      setIsLoading(true);
      const { data } = await api.patch(`/products/${formData.id}`, {
        name: formData.name,
        description: formData.description,
        price: formData.price,
      });
      searchAllProducts();
      setIsLoading(false);
      return toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        return toast.error(error.message);
      }
    }
  }

  async function deleteProduct(id: string) {
    console.log(id);
    try {
      setIsLoading(true);
      const {data} = await api.delete(`/products/${id}`);
      searchAllProducts();
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
      value={{
        products,
        isLoading,
        searchAllProducts,
        updateProduct,
        createNewProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
